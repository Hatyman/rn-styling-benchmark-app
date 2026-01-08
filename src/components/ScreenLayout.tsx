import type { ComponentProps, FC } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';

type OwnVariants = UnistylesVariants<typeof ownStyles>;

interface OwnProps extends ComponentProps<typeof View> {
  bgVariant?: OwnVariants['bgColor'] | null;
}

export const ScreenLayout: FC<OwnProps> = function ScreenLayout({
  bgVariant = 'primary',
  ...props
}) {
  ownStyles.useVariants({
    bgColor: bgVariant ?? undefined,
  });

  const styles: StyleProp<ViewStyle> = [ownStyles.base, ownStyles.themedStyle];

  if (props.style) {
    styles.push(props.style);
  }

  return (
    <View {...props} style={styles}>
      {props.children}
    </View>
  );
};

const ownStyles = StyleSheet.create((tokens, rt) => ({
  base: {
    flex: 1,
    paddingTop: rt.insets.top,
    paddingBottom: rt.insets.bottom,
  },
  themedStyle: {
    variants: {
      bgColor: {
        primary: {
          backgroundColor: tokens.isLight
            ? tokens.base.colors.sys.bg.primary
            : tokens.base.colors.sys.bg.accent,
        },
        secondary: {
          backgroundColor: tokens.base.colors.sys.bg.secondary,
        },
        alternative: {
          backgroundColor: tokens.isLight
            ? tokens.base.colors.sys.bg.accent
            : tokens.base.colors.sys.bg.primary,
        },
      },
    },
  },
}));
