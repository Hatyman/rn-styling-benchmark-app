import { type FC, Fragment, useState } from 'react';
import { LargeListCase } from '@/cases/largeList/LargeListCase.tsx';
import { TabBar } from '@/components/TabBar.tsx';
import { LargeScrollCase } from '@/cases/largeScroll/LargeScrollCase.tsx';

export const RootScreen: FC = function RootScreen() {
  const [mode, setMode] = useState<'list' | 'scroll'>('list');

  return (
    <Fragment>
      {mode === 'list' ? <LargeListCase /> : <LargeScrollCase />}
      <TabBar mode={mode} onModeChange={setMode} />
    </Fragment>
  );
};
