import { type FC } from 'react';
import { View } from 'react-native';
import { Button } from '@/components/Button.tsx';

interface OwnProps {
  onModeChange: (mode: 'list' | 'scroll') => void;
  mode: 'list' | 'scroll';
}

export const TabBar: FC<OwnProps> = function TabBar(props) {
  return (
    <View>
      <Button
        text={'Large list'}
        onPress={() => {
          props.onModeChange('list');
        }}
      />
      <Button
        text={'Large scroll'}
        onPress={() => {
          props.onModeChange('scroll');
        }}
      />
    </View>
  );
};
