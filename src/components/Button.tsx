import type { ComponentProps, FC } from 'react';
import { Typography } from '@/components/Typography.tsx';
import { Pressable, type PressableStateCallbackType } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface OwnProps extends ComponentProps<typeof Pressable> {
  text?: string;
}

export const Button: FC<OwnProps> = function Button({ text, style, ...props }) {
  ownStyles.useVariants({
    bgColor: 'primary',
  });

  return (
    <Pressable
      {...props}
      style={e => [
        ownStyles.base,
        ownStyles.themedStyle(e),
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

const ownStyles = StyleSheet.create(tokens => ({
  base: {
    flexDirection: 'row',
    minHeight: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themedStyle: (state: PressableStateCallbackType) => ({
    variants: {
      bgColor: {
        primary: {
          backgroundColor: state.pressed
            ? tokens.base.colors.sys.bg.state.successHighEmphasize
            : tokens.isLight
            ? tokens.base.colors.comp.btn.primary.bg.default
            : '#FFFFFF',
        },
      },
    },
  }),
}));
