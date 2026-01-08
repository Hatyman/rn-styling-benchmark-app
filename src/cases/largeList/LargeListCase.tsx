import type { FC } from 'react';
import { arrayOf1000Items } from '@/consts.ts';
import { LargeListItem } from '@/components/LargeListItem.tsx';
import styled from 'styled-components/native';

const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { paddingHorizontal: 16, gap: 16 },
}))`
  flex: 1;
`;

export const LargeListCase: FC = function LargeListCase() {
  return (
    <StyledScrollView>
      {arrayOf1000Items.map((_, i) => (
        <LargeListItem
          key={i}
          title={`Item №${i}`}
          text={`There is some description for the item №${i}`}
        />
      ))}
    </StyledScrollView>
  );
};
