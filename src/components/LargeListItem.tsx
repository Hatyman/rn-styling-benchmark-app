import type { FC } from 'react';
import { View } from 'react-native';
import { Typography } from '@/components/Typography.tsx';
import { Button } from '@/components/Button.tsx';

interface OwnProps {
  title: string;
  text: string;
}

function changeTheme() {}

export const LargeListItem: FC<OwnProps> = function LargeListItem(props) {
  return (
    <View>
      <Typography>{props.title}</Typography>
      <Typography>{props.text}</Typography>
      <Button
        text={'Toggle theme'}
        onPress={() => {
          changeTheme();
        }}
      />
    </View>
  );
};
