import type { FC } from 'react';
import { FlatList, type ListRenderItemInfo } from 'react-native';
import { arrayOf10000Items } from '@/consts.ts';
import { LargeListItem } from '@/components/LargeListItem.tsx';

function keyExtractor(_item: number, index: number) {
  return index.toString();
}

function renderItem({ index }: ListRenderItemInfo<number>) {
  return (
    <LargeListItem title={`Flat list item №${index}`} text={`Description of the item №${index}`} />
  );
}

export const LargeScrollCase: FC = function LargeScrollCase() {
  return <FlatList data={arrayOf10000Items} renderItem={renderItem} keyExtractor={keyExtractor} />;
};
