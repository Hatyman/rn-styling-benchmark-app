/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootScreen } from '@/RootScreen.tsx';
import { ThemeProvider, useThemeConfig } from '@/providers/ThemeProvider.tsx';
import styled from 'styled-components/native';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const StyledView = styled.View`
  flex: 1;
`;

function AppContent() {
  const { theme } = useThemeConfig();

  return (
    <StyledView>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <RootScreen />
    </StyledView>
  );
}

export default App;
