import { ScrollView } from 'react-native';
import type { FC } from 'react';
import { arrayOf1000Items } from '@/consts.ts';
import { LargeListItem } from '@/components/LargeListItem.tsx';
import { sharedStyles } from '@/styles/shared-styles.ts';

export const LargeListCase: FC = function LargeListCase() {
  return (
    <ScrollView contentContainerStyle={contentContainerStyle}>
      {arrayOf1000Items.map((_, i) => (
        <LargeListItem
          key={i}
          title={`Item №${i}`}
          text={`There is some description for the item №${i}`}
        />
      ))}
    </ScrollView>
  );
};

const contentContainerStyle = [sharedStyles.gap16, sharedStyles.paddingHorizontal16];
