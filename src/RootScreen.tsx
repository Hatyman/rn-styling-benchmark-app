import { type FC, useState } from 'react';
import { LargeListCase } from '@/cases/largeList/LargeListCase.tsx';
import { TabBar } from '@/components/TabBar.tsx';
import { LargeScrollCase } from '@/cases/largeScroll/LargeScrollCase.tsx';
import { ScreenLayout } from '@/components/ScreenLayout.tsx';

// com.stylingbenchmarkapp
// flashlight test --bundleId com.stylingbenchmarkapp --testCommand "adb shell input swipe 300 800 300 100 50" --duration 10000 --resultsFilePath flashlight/reports/nude.json --resultsTitle "Nude" --iterationCount 3
// flashlight test --bundleId com.stylingbenchmarkapp --testCommand "npx @perf-profiler/maestro@latest test flashlight/large-list.yml" --duration 10000 --resultsFilePath flashlight/reports/nude.json --resultsTitle "Nude" --iterationCount 3
// flashlight test --bundleId com.stylingbenchmarkapp --testCommand "maestro test flashlight/large-list.yml" --duration 60000 --resultsFilePath flashlight/reports/nude.json --resultsTitle "Nude" --iterationCount 3

export const RootScreen: FC = function RootScreen() {
  const [mode, setMode] = useState<'list' | 'scroll'>('list');

  return (
    <ScreenLayout>
      {mode === 'list' ? <LargeListCase /> : <LargeScrollCase />}
      <TabBar mode={mode} onModeChange={setMode} />
    </ScreenLayout>
  );
};
