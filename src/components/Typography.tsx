import type { ComponentProps, FC } from 'react';
import { type StyleProp, StyleSheet, Text, type TextStyle } from 'react-native';
import type { MobileTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/base.d.ts';
import type { TypographyTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/typography-en.d.ts';
import { useUIKitTheme } from '@/utils/styling-utils.ts';
import { useThemeTypography } from '@/providers/ThemeProvider.tsx';

interface OwnProps extends ComponentProps<typeof Text> {
  textAlign?: 'center' | 'left' | 'right';
  colorVariant?: 'primary' | 'secondary' | 'alternative' | 'accent' | null;
  variant?: keyof TypographyTheme['typography'] | null;
}

export const Typography: FC<OwnProps> = function Typography({
  textAlign,
  colorVariant = 'primary',
  variant = 'BodyMedium',
  ...props
}) {
  const styles: StyleProp<TextStyle> = [];

  const typographyTokens = useThemeTypography();

  const themedStyles = useUIKitTheme('Typography-color', getThemedStyles);
  const variantStyles = useUIKitTheme('Typography-variant', getVariantStyles, typographyTokens);

  if (textAlign) {
    styles.push(ownStyles[textAlign]);
  }
  if (colorVariant) {
    styles.push(themedStyles[colorVariant]);
  }
  if (variant) {
    styles.push(variantStyles[variant]);
  }

  if (props.style) {
    styles.push(props.style);
  }

  return <Text {...props} style={styles} />;
};

const ownStyles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
});

function getThemedStyles(theme: 'light' | 'dark', tokens: MobileTheme) {
  return StyleSheet.create({
    primary: {
      color: theme === 'light' ? tokens.colors.sys.text.primary : tokens.colors.sys.text.onAccent,
    },
    secondary: {
      color: tokens.colors.sys.text.secondary,
    },
    alternative: {
      color: theme === 'light' ? tokens.colors.sys.text.onAccent : tokens.colors.sys.text.primary,
    },
    accent: {
      color:
        theme === 'light'
          ? tokens.colors.sys.text.state.success
          : tokens.colors.sys.text.state.danger,
    },
  });
}

function getVariantStyles(_theme: 'light' | 'dark', tokens: TypographyTheme) {
  const typography = tokens.typography;

  const styles: Record<string, TextStyle> = {};
  for (const key in typography) {
    const variant = key as keyof typeof typography;
    styles[variant] = {
      fontFamily: typography[variant].fontFamily,
      fontSize: typography[variant].fontSize,
      lineHeight: typography[variant].lineHeight,
    };
  }

  return StyleSheet.create(styles as Record<keyof typeof typography, TextStyle>);
}
