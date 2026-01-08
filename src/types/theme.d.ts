import type { MobileTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/base.d.ts';
import type { TypographyTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/typography-en.d.ts';

declare module 'styled-components/native' {
  export interface DefaultTheme extends TypographyTheme {
    base: MobileTheme;
    theme: 'light' | 'dark';
  }
}
