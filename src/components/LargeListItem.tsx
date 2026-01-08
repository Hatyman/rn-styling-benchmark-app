import type { FC } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { Typography } from '@/components/Typography.tsx';
import { Button } from '@/components/Button.tsx';
import { sharedStyles } from '@/styles/shared-styles.ts';
import { UnistylesRuntime } from 'react-native-unistyles';

interface OwnProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  text: string;
}

export const LargeListItem: FC<OwnProps> = function LargeListItem(props) {
  return (
    <View style={props.containerStyle}>
      <Typography variant={'HeadlineLarge'} colorVariant={'accent'}>
        {props.title}
      </Typography>
      <Typography variant={'BodyLarge'} colorVariant={'secondary'}>
        {props.text}
      </Typography>
      <Button
        style={sharedStyles.mt16}
        text={`Toggle theme (now ${UnistylesRuntime.themeName})`}
        onPress={() => {
          UnistylesRuntime.setTheme(UnistylesRuntime.themeName === 'dark' ? 'light' : 'dark');
        }}
      />
    </View>
  );
};
