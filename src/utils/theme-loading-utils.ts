import _typographyTheme from '@jisr-hr/ds-foundation/mobile/abc/light/typography-ar.json';
import type { MobileTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/base.d.ts';

const company = 'abc';

export async function asyncLoadAndGetTheme(theme: 'light' | 'dark'): Promise<MobileTheme> {
  return import(`@jisr-hr/ds-foundation/mobile/${company}/${theme}/base.json`).then(x => x.default);
}

export function syncLoadAndGetTheme(theme: 'light' | 'dark'): MobileTheme {
  return require(`@jisr-hr/ds-foundation/mobile/${company}/${theme}/base.json`);
}

export const typographyTheme = _typographyTheme;
