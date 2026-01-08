import type { MobileTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/base.d.ts';
import { useThemeColors, useThemeConfig } from '@/providers/ThemeProvider.tsx';

const registeredThemes = new Map<string, unknown>();

export function useUIKitTheme<T, K = MobileTheme>(
  component: string,
  getThemedStyles: (theme: 'light' | 'dark', tokens: K) => T,
  themeArg?: K
): T {
  const { theme } = useThemeConfig();
  const appTheme = useThemeColors();

  const themeKey = `${component}.${theme}`;
  let registeredTheme = registeredThemes.get(themeKey) as T | undefined;

  if (!registeredTheme) {
    registeredTheme = getThemedStyles(theme, themeArg ?? (appTheme as K));

    registeredThemes.set(themeKey, registeredTheme);
  }

  return registeredTheme;
}
