import type { ComponentProps, FC } from 'react';
import { Typography } from '@/components/Typography.tsx';
import { Pressable } from 'react-native';

interface OwnProps extends ComponentProps<typeof Pressable> {
  text?: string;
}

export const Button: FC<OwnProps> = function Button({ text, ...props }) {
  return <Pressable {...props}>{!!text && <Typography>{text}</Typography>}</Pressable>;
};
