import type { ComponentProps, FC } from 'react';
import { type StyleProp, StyleSheet, View, type ViewStyle } from 'react-native';
import type { MobileTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/base.d.ts';
import { useUIKitTheme } from '@/utils/styling-utils.ts';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OwnProps extends ComponentProps<typeof View> {
  bgVariant?: 'primary' | 'secondary' | 'alternative' | null;
}

export const ScreenLayout: FC<OwnProps> = function ScreenLayout({
  bgVariant = 'primary',
  ...props
}) {
  const themedStyles = useUIKitTheme(ScreenLayout.name, getThemedStyles);

  const styles: StyleProp<ViewStyle> = [ownStyles.base];

  if (bgVariant) {
    styles.push(themedStyles[bgVariant]);
  }

  if (props.style) {
    styles.push(props.style);
  }

  return (
    <SafeAreaView {...props} style={styles}>
      {props.children}
    </SafeAreaView>
  );
};

const ownStyles = StyleSheet.create({
  base: {
    flex: 1,
  },
});

function getThemedStyles(theme: 'light' | 'dark', tokens: MobileTheme) {
  return StyleSheet.create({
    primary: {
      backgroundColor:
        theme === 'light' ? tokens.colors.sys.bg.primary : tokens.colors.sys.bg.accent,
    },
    secondary: {
      backgroundColor: tokens.colors.sys.bg.secondary,
    },
    alternative: {
      backgroundColor:
        theme === 'light' ? tokens.colors.sys.bg.accent : tokens.colors.sys.bg.primary,
    },
  });
}
