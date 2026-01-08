import _typographyTheme from '@jisr-hr/ds-foundation/mobile/abc/light/typography-en.json';
import type { MobileTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/base.d.ts';

const colorsSyncTokensRecord = {
  light: () => require(`@jisr-hr/ds-foundation/mobile/abc/light/base.json`),
  dark: () => require(`@jisr-hr/ds-foundation/mobile/abc/dark/base.json`),
};

export function syncLoadAndGetTheme(theme: 'light' | 'dark'): MobileTheme {
  return colorsSyncTokensRecord[theme]();
}

export const typographyTheme = _typographyTheme;
