from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy

# 1. Настройка опций
options = UiAutomator2Options()
options.platform_name = 'Android'
options.automation_name = 'UiAutomator2'

# Имя устройства (для adb это может быть просто 'Android', либо реальный id из 'adb devices')
options.device_name = '2B101FDH200GDH'

# --- КЛЮЧЕВЫЕ НАСТРОЙКИ ДЛЯ УСТАНОВЛЕННОГО ПРИЛОЖЕНИЯ ---
# Замените на реальный пакет вашего приложения (например, com.instagram.android)
options.app_package = 'com.stylingbenchmarkapp.stylesheet'
# Замените на Activity, которая запускает приложение (часто это .MainActivity)
options.app_activity = '.MainActivity'

# noReset=True означает: "Не удаляй приложение и не чисти его данные/кэш"
options.no_reset = True

# URL сервера Appium (обычно такой по умолчанию)
appium_server_url = 'http://127.0.0.1:4723'

try:
    print("Подключаемся к телефону и запускаем приложение...")
    driver = webdriver.Remote(appium_server_url, options=options)

    # Неявное ожидание 10 секунд
    driver.implicitly_wait(3)

    # --- ПОИСК И КЛИК ---
    # React Native testID мапится в Accessibility ID
    test_id = "toggleTheme"

    print(f"Ищем элемент с testID='{test_id}'...")
    button = driver.find_element(AppiumBy.ACCESSIBILITY_ID, test_id)
    button.click()

    print("Клик прошел успешно!")

except Exception as e:
    print(f"Произошла ошибка: {e}")

finally:
    # Завершаем сессию, но приложение останется открытым (если не добавить driver.close_app())
    if 'driver' in locals():
        driver.quit()
        print("Сессия Appium закрыта.")
