import { syncLoadAndGetTheme, typographyTheme } from '@/utils/theme-loading-utils.ts';
import { StyleSheet } from 'react-native-unistyles';

const appThemes = {
  light: {
    isLight: true,
    base: syncLoadAndGetTheme('light'),
    ...typographyTheme,
  },
  dark: {
    isLight: false,
    base: syncLoadAndGetTheme('dark'),
    ...typographyTheme,
  },
};

export type AppThemes = typeof appThemes;

export function configureUnistyles() {
  StyleSheet.configure({
    themes: appThemes,
    settings: {
      adaptiveThemes: false,
      CSSVars: false,
      initialTheme: 'light',
    },
  });
}
