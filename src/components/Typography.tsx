import type { ComponentProps, FC } from 'react';
import { Text, type TextStyle } from 'react-native';
import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';

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

  return <Text {...props} style={[ownStyles.themedStyle, props.style]} />;
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
        style: {
          DisplayMedium: {
            fontFamily: tokens.typography.DisplayMedium.fontFamily,
            fontSize: tokens.typography.DisplayMedium.fontSize,
            lineHeight: tokens.typography.DisplayMedium.lineHeight,
          },
          HeadlineLarge: {
            fontFamily: tokens.typography.HeadlineLarge.fontFamily,
            fontSize: tokens.typography.HeadlineLarge.fontSize,
            lineHeight: tokens.typography.HeadlineLarge.lineHeight,
          },
          HeadlineMedium: {
            fontFamily: tokens.typography.HeadlineMedium.fontFamily,
            fontSize: tokens.typography.HeadlineMedium.fontSize,
            lineHeight: tokens.typography.HeadlineMedium.lineHeight,
          },
          HeadlineSmall: {
            fontFamily: tokens.typography.HeadlineSmall.fontFamily,
            fontSize: tokens.typography.HeadlineSmall.fontSize,
            lineHeight: tokens.typography.HeadlineSmall.lineHeight,
          },
          TitleLarge: {
            fontFamily: tokens.typography.TitleLarge.fontFamily,
            fontSize: tokens.typography.TitleLarge.fontSize,
            lineHeight: tokens.typography.TitleLarge.lineHeight,
          },
          TitleMedium: {
            fontFamily: tokens.typography.TitleMedium.fontFamily,
            fontSize: tokens.typography.TitleMedium.fontSize,
            lineHeight: tokens.typography.TitleMedium.lineHeight,
          },
          TitleSmall: {
            fontFamily: tokens.typography.TitleSmall.fontFamily,
            fontSize: tokens.typography.TitleSmall.fontSize,
            lineHeight: tokens.typography.TitleSmall.lineHeight,
          },
          BodyLarge: {
            fontFamily: tokens.typography.BodyLarge.fontFamily,
            fontSize: tokens.typography.BodyLarge.fontSize,
            lineHeight: tokens.typography.BodyLarge.lineHeight,
          },
          BodyMedium: {
            fontFamily: tokens.typography.BodyMedium.fontFamily,
            fontSize: tokens.typography.BodyMedium.fontSize,
            lineHeight: tokens.typography.BodyMedium.lineHeight,
          },
          BodySmall: {
            fontFamily: tokens.typography.BodySmall.fontFamily,
            fontSize: tokens.typography.BodySmall.fontSize,
            lineHeight: tokens.typography.BodySmall.lineHeight,
          },
          LabelLarge: {
            fontFamily: tokens.typography.LabelLarge.fontFamily,
            fontSize: tokens.typography.LabelLarge.fontSize,
            lineHeight: tokens.typography.LabelLarge.lineHeight,
          },
          LabelMedium: {
            fontFamily: tokens.typography.LabelMedium.fontFamily,
            fontSize: tokens.typography.LabelMedium.fontSize,
            lineHeight: tokens.typography.LabelMedium.lineHeight,
          },
          LabelSmall: {
            fontFamily: tokens.typography.LabelSmall.fontFamily,
            fontSize: tokens.typography.LabelSmall.fontSize,
            lineHeight: tokens.typography.LabelSmall.lineHeight,
          },
        } satisfies Record<keyof typeof tokens.typography, TextStyle>,
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
