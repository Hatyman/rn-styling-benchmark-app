import { type ComponentProps, type FC, useState } from 'react';
import { Typography } from '@/components/Typography.tsx';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

interface OwnProps extends ComponentProps<typeof Pressable> {
  text?: string;
}

const StyledPressable = styled.Pressable<{ $isPressed: boolean }>`
  flex-direction: row;
  min-height: 48px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;

  ${({ theme: tokens, $isPressed }) => {
    let color: string;

    if ($isPressed) {
      color = tokens.base.colors.sys.bg.state.successHighEmphasize;
    } else {
      color = tokens.theme === 'light' ? '#101014' : '#FFFFFF';
    }

    return `background-color: ${color};`;
  }}
`;

export const Button: FC<OwnProps> = function Button({ text, ...props }) {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <StyledPressable
      {...props}
      $isPressed={isPressed}
      onPressIn={e => {
        props.onPressIn?.(e);
        setIsPressed(true);
      }}
      onPressOut={e => {
        props.onPressOut?.(e);
        setIsPressed(false);
      }}
    >
      {!!text && (
        <Typography textAlign={'center'} variant={'BodyMedium'} colorVariant={'alternative'}>
          {text}
        </Typography>
      )}
    </StyledPressable>
  );
};
