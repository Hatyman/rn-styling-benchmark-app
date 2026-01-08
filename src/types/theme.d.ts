import type { AppThemes } from '@/utils/theme-init-utils.ts';

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
