import subprocess
import time
import sys
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy

# --- НАСТРОЙКИ ---
# Укажите здесь ваши реальные данные
APP_PACKAGE = 'com.stylingbenchmarkapp.stylesheet'
APP_ACTIVITY = '.MainActivity'
DEVICE_ID = '2B101FDH200GDH'  # Из вашего лога

def run_adb_command(command):
    """Выполняет ADB команду и выводит результат, игнорируя ошибки, если пакета нет."""
    full_command = f"adb -s {DEVICE_ID} {command}"
    print(f"> {full_command}")
    try:
        # shell=True позволяет выполнять команды так же, как в терминале
        subprocess.run(full_command, shell=True, check=False, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except Exception as e:
        print(f"  Ошибка выполнения команды: {e}")

def clean_android_artifacts():
    """Удаляет служебные приложения Appium, которые могут вызывать конфликт."""
    print("\n--- ЗАПУСК ОЧИСТКИ (CLEANUP) ---")

    packages = [
        "io.appium.uiautomator2.server",
        "io.appium.uiautomator2.server.test",
        "io.appium.settings"
    ]

    for package in packages:
        print(f"Удаляем {package}...")
        run_adb_command(f"uninstall {package}")

    # Дополнительно: убиваем процесс uiautomator на телефоне, если он завис
    print("Принудительная остановка uiautomator процессов...")
    run_adb_command("shell pkill -f uiautomator")

    print("Очистка завершена. Ждем 3 секунды перед стартом теста...\n")
    time.sleep(3)

def run_test():
    # 1. Сначала чистим хвосты
    clean_android_artifacts()

    # 2. Настраиваем Capabilities
    options = UiAutomator2Options()
    options.platform_name = 'Android'
    options.automation_name = 'UiAutomator2'
    options.device_name = DEVICE_ID
    options.app_package = APP_PACKAGE
    options.app_activity = APP_ACTIVITY
    options.no_reset = True

    # --- ВАЖНО: Увеличенные таймауты для Android 16 ---
    # Даем телефону больше времени на запуск драйвера
    options.set_capability("appium:uiautomator2ServerLaunchTimeout", 60000) # 60 сек
    options.set_capability("appium:uiautomator2ServerInstallTimeout", 60000) # 60 сек
    options.set_capability("appium:adbExecTimeout", 60000) # 60 сек для команд ADB

    # --- ЭКСПЕРИМЕНТАЛЬНО (если все равно не работает) ---
    # Иногда помогает отключить подавление ошибок доступности на новых Android
    # options.set_capability("appium:disableSuppressAccessibilityService", True)

    driver = None
    try:
        print("Подключаемся к серверу Appium...")
        driver = webdriver.Remote('http://127.0.0.1:4723', options=options)
        print("Сессия успешно создана!")

        driver.implicitly_wait(10)

        # Ваш тестовый сценарий
        test_id = "test"
        print(f"Ищем элемент testID='{test_id}'...")

        try:
            btn = driver.find_element(AppiumBy.ACCESSIBILITY_ID, test_id)
            btn.click()
            print("Успешный клик!")
        except Exception as e:
            print(f"Элемент не найден или ошибка клика: {e}")

    except Exception as e:
        print(f"\nКРИТИЧЕСКАЯ ОШИБКА ЗАПУСКА:\n{e}")
        print("\nСовет: Если ошибка 'UiAutomation not connected' осталась, перезагрузите телефон вручную.")

    finally:
        if driver:
            driver.quit()
            print("Сессия закрыта.")

if __name__ == '__main__':
    run_test()
