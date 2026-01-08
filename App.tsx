/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootScreen } from '@/RootScreen.tsx';
import { StyleSheet, withUnistyles } from 'react-native-unistyles';
import { configureUnistyles } from '@/utils/theme-init-utils.ts';

configureUnistyles();

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const UniStatusBar = withUnistyles(StatusBar, tokens => ({
  barStyle: tokens.isLight ? ('dark-content' as const) : ('light-content' as const),
}));

function AppContent() {
  return (
    <View style={ownStyles.container}>
      <UniStatusBar />
      <RootScreen />
    </View>
  );
}

const ownStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
