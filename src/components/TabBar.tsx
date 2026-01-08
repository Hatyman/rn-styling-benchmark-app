import { type FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@/components/Button.tsx';
import { sharedStyles } from '@/styles/shared-styles.ts';

interface OwnProps {
  onModeChange: (mode: 'list' | 'scroll') => void;
  mode: 'list' | 'scroll';
}

export const TabBar: FC<OwnProps> = function TabBar(props) {
  return (
    <View style={[ownStyles.container, sharedStyles.paddingHorizontal16]}>
      <Button
        style={ownStyles.flexSameSize}
        text={'Large list'}
        onPress={() => {
          props.onModeChange('list');
        }}
      />
      <Button
        style={ownStyles.flexSameSize}
        text={'Large scroll'}
        onPress={() => {
          props.onModeChange('scroll');
        }}
      />
    </View>
  );
};

const ownStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    paddingTop: 16,
  },
  flexSameSize: {
    flexBasis: '10%',
    flexGrow: 1,
  },
});
