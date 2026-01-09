import type { ComponentProps, FC } from 'react';
import { Text, type TextStyle } from 'react-native';
import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';
import type { AppThemes } from '@/utils/theme-init-utils.ts';

type Variants = UnistylesVariants<typeof ownStyles>;

interface OwnProps extends ComponentProps<typeof Text> {
  textAlign?: Variants['align'];
  colorVariant?: Variants['color'] | null;
  variant?: Variants['style'] | null;
}

export const Typography: FC<OwnProps> = function Typography({
  textAlign,
  colorVariant = 'primary',
  variant = 'BodyMedium',
  ...props
}) {
  ownStyles.useVariants({
    color: colorVariant ?? undefined,
    style: variant ?? undefined,
    align: textAlign,
  });

  return <Text {...props} style={StyleSheet.compose(ownStyles.themedStyle, props.style)} />;
};

const ownStyles = StyleSheet.create(tokens => {
  return {
    themedStyle: {
      variants: {
        color: {
          primary: {
            color: tokens.isLight
              ? tokens.base.colors.sys.text.primary
              : tokens.base.colors.sys.text.onAccent,
          },
          secondary: {
            color: tokens.base.colors.sys.text.secondary,
          },
          alternative: {
            color: tokens.isLight
              ? tokens.base.colors.sys.text.onAccent
              : tokens.base.colors.sys.text.primary,
          },
          accent: {
            color: tokens.isLight
              ? tokens.base.colors.sys.text.state.success
              : tokens.base.colors.sys.text.state.danger,
          },
        },
        style: getVariantStyles(tokens),
        align: {
          center: {
            textAlign: 'center',
          },
          left: {
            textAlign: 'left',
          },
          right: {
            textAlign: 'right',
          },
        },
      },
    },
  };
});

function getVariantStyles(tokens: AppThemes['light']) {
  const typography = tokens.typography;

  const styles = {} as Record<
    keyof typeof typography,
    Pick<TextStyle, 'fontFamily' | 'fontSize' | 'lineHeight'>
  >;
  for (const key in typography) {
    const variant = key as keyof typeof typography;
    styles[variant] = {
      fontFamily: typography[variant].fontFamily,
      fontSize: typography[variant].fontSize,
      lineHeight: typography[variant].lineHeight,
    };
  }

  return styles;
}
