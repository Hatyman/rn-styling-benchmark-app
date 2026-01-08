import type { FC } from 'react';
import { FlatList, type ListRenderItemInfo } from 'react-native';
import { arrayOf1000Items } from '@/consts.ts';
import { LargeListItem } from '@/components/LargeListItem.tsx';
import styled from 'styled-components/native';

function keyExtractor(_item: number, index: number) {
  return index.toString();
}

function renderItem({ index }: ListRenderItemInfo<number>) {
  return (
    <LargeListItem title={`Flat list item №${index}`} text={`Description of the item №${index}`} />
  );
}

const StyledFlatList = styled(FlatList<number>).attrs(() => ({
  contentContainerStyle: { paddingHorizontal: 16, gap: 16 },
}))`
  flex: 1;
`;

export const LargeScrollCase: FC = function LargeScrollCase() {
  return (
    <StyledFlatList data={arrayOf1000Items} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};
