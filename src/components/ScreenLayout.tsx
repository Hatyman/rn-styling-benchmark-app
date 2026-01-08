import type { ComponentProps, FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OwnProps extends ComponentProps<typeof View> {
  bgVariant?: 'primary' | 'secondary' | 'alternative' | null;
}

export const ScreenLayout: FC<OwnProps> = function ScreenLayout({
  bgVariant = 'primary',
  ...props
}) {
  return (
    <SafeAreaView {...props} style={[ownStyles.base, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

const ownStyles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
