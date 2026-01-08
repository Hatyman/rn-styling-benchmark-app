import type { FC } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { Typography } from '@/components/Typography.tsx';
import { Button } from '@/components/Button.tsx';
import { useThemeConfig } from '@/providers/ThemeProvider.tsx';
import styled from 'styled-components/native';

interface OwnProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  text: string;
}

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export const LargeListItem: FC<OwnProps> = function LargeListItem(props) {
  const { theme, changeTheme } = useThemeConfig();

  return (
    <View style={props.style}>
      <Typography variant={'HeadlineLarge'} colorVariant={'accent'}>
        {props.title}
      </Typography>
      <Typography variant={'BodyLarge'} colorVariant={'secondary'}>
        {props.text}
      </Typography>
      <StyledButton
        text={`Toggle theme (now ${theme})`}
        onPress={() => {
          changeTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      />
    </View>
  );
};
