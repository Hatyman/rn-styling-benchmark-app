import type { ComponentProps, FC } from 'react';
import { Typography } from '@/components/Typography.tsx';
import { Pressable, StyleSheet } from 'react-native';
import type { MobileTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/base.d.ts';
import { useUIKitTheme } from '@/utils/styling-utils.ts';

interface OwnProps extends ComponentProps<typeof Pressable> {
  text?: string;
}

export const Button: FC<OwnProps> = function Button({ text, style, ...props }) {
  const themedStyles = useUIKitTheme('Button', getThemedStyles);

  return (
    <Pressable
      {...props}
      style={e => [
        ownStyles.base,
        e.pressed ? themedStyles.primaryPressed : themedStyles.primaryDefault,
        style && typeof style === 'function' ? style(e) : style,
      ]}
    >
      {!!text && (
        <Typography textAlign={'center'} variant={'BodyMedium'} colorVariant={'alternative'}>
          {text}
        </Typography>
      )}
    </Pressable>
  );
};

const ownStyles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    minHeight: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function getThemedStyles(theme: 'light' | 'dark', tokens: MobileTheme) {
  return StyleSheet.create({
    primaryDefault: {
      backgroundColor: theme === 'light' ? '#101014' : '#FFFFFF', // tokens.colors.sys.bg.primary,
    },
    primaryPressed: {
      backgroundColor: tokens.colors.sys.bg.state.successHighEmphasize,
    },
  });
}
