import { type FC, useState } from 'react';
import { LargeListCase } from '@/cases/largeList/LargeListCase.tsx';
import { TabBar } from '@/components/TabBar.tsx';
import { LargeScrollCase } from '@/cases/largeScroll/LargeScrollCase.tsx';
import { ScreenLayout } from '@/components/ScreenLayout.tsx';
import { Button } from '@/components/Button.tsx';
import styled from 'styled-components/native';

/**
 * com.stylingbenchmarkapp
 * .debug, .stylesheet, .unistyles, .sc
 * flashlight test --bundleId com.stylingbenchmarkapp --testCommand "adb shell input swipe 300 800 300 100 50" --duration 10000 --resultsFilePath flashlight/reports/stylesheet.json --resultsTitle "Nude" --iterationCount 3
 * flashlight test --bundleId com.stylingbenchmarkapp --testCommand "npx @perf-profiler/maestro@latest test flashlight/large-list.yml" --duration 10000 --resultsFilePath flashlight/reports/stylesheet.json --resultsTitle "Nude" --iterationCount 3
 * flashlight test --bundleId com.stylingbenchmarkapp --testCommand "maestro test flashlight/large-list.yml" --duration 60000 --resultsFilePath flashlight/reports/stylesheet.json --resultsTitle "Nude" --iterationCount 3
 * flashlight test --bundleId com.stylingbenchmarkapp.stylesheet --testCommand "maestro test flashlight/startup.yml" --duration 10000 --resultsFilePath flashlight/reports/stylesheet.json --resultsTitle "Stylesheet" --iterationCount 10
 * npx react-native-bundle-visualizer --platform android --bundle-output .bundle/visualization/sc.bundle --format json --reset-cache
 */

const StyledButton = styled(Button)`
  margin: 0 16px 16px;
`;

export const RootScreen: FC = function RootScreen() {
  const [mode, setMode] = useState<'list' | 'scroll'>('list');
  const [, setState] = useState<object>({});

  return (
    <ScreenLayout>
      <StyledButton text={'Simulate rerender'} onPress={() => setState({})} />
      {mode === 'list' ? <LargeListCase /> : <LargeScrollCase />}
      <TabBar mode={mode} onModeChange={setMode} />
    </ScreenLayout>
  );
};
