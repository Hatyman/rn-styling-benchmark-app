import type { ComponentProps, FC } from 'react';
import { Text } from 'react-native';

export const Typography: FC<ComponentProps<typeof Text>> = function Typography(props) {
  return <Text {...props} />;
};
