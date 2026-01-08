import { createContext, type FC, type PropsWithChildren, useContext, useState } from 'react';
import type { MobileTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/base.d.ts';
import type { TypographyTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/typography-en.d.ts';
import { syncLoadAndGetTheme, typographyTheme } from '@/utils/theme-loading-utils.ts';

interface ThemeControlContextType {
  theme: 'light' | 'dark';
  changeTheme: (newTheme: 'light' | 'dark') => void;
}

const ThemeControlContext = createContext<ThemeControlContextType | null>(null);
const ThemeColorsContext = createContext<MobileTheme | null>(null);
const ThemeTypographyContext = createContext<TypographyTheme | null>(null);

export const ThemeProvider: FC<PropsWithChildren> = function ThemeProvider(props) {
  const [theme, setTheme] = useState<ThemeControlContextType['theme']>('light');
  const [colorTokens, setColorTokens] = useState<MobileTheme>(() => syncLoadAndGetTheme('light'));

  return (
    <ThemeControlContext.Provider
      value={{
        theme,
        changeTheme: newTheme => {
          if (newTheme === theme) return;

          setColorTokens(syncLoadAndGetTheme(newTheme));
          setTheme(newTheme);
        },
      }}
    >
      <ThemeColorsContext.Provider value={colorTokens}>
        <ThemeTypographyContext.Provider value={typographyTheme}>
          {props.children}
        </ThemeTypographyContext.Provider>
      </ThemeColorsContext.Provider>
    </ThemeControlContext.Provider>
  );
};

export function useThemeConfig() {
  const context = useContext(ThemeControlContext);

  if (!context) {
    throw new Error('useThemeConfig must be used within a ThemeProvider');
  }

  return context;
}

export function useThemeColors() {
  const context = useContext(ThemeColorsContext);

  if (!context) {
    throw new Error('useThemeColors must be used within a ThemeProvider');
  }

  return context;
}

export function useThemeTypography() {
  const context = useContext(ThemeTypographyContext);

  if (!context) {
    throw new Error('useThemeTypography must be used within a ThemeProvider');
  }

  return context;
}
