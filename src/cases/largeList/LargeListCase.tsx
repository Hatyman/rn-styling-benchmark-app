import { ScrollView } from 'react-native';
import type { FC } from 'react';
import { arrayOf10000Items } from '@/consts.ts';
import { LargeListItem } from '@/components/LargeListItem.tsx';

export const LargeListCase: FC = function LargeListCase() {
  return (
    <ScrollView>
      {arrayOf10000Items.map((_, i) => (
        <LargeListItem
          key={i}
          title={`Item №${i}`}
          text={`There is some description for the item №${i}`}
        />
      ))}
    </ScrollView>
  );
};
