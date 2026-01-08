/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootScreen } from '@/RootScreen.tsx';
import { ThemeProvider, useThemeConfig } from '@/providers/ThemeProvider.tsx';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { theme } = useThemeConfig();

  return (
    <View style={ownStyles.container}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
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
