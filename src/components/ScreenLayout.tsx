import type { ComponentProps, FC } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

interface OwnProps extends ComponentProps<typeof View> {
  bgVariant?: 'primary' | 'secondary' | 'alternative' | null;
}

const StyledSaveAreaView = styled(SafeAreaView)<{ $bgVariant: OwnProps['bgVariant'] }>`
  flex: 1;

  ${({ theme: tokens, $bgVariant }) => {
    let backgroundColor: string;

    switch ($bgVariant) {
      case 'secondary':
        backgroundColor = tokens.base.colors.sys.bg.secondary;
        break;
      case 'alternative':
        backgroundColor =
          tokens.theme === 'light'
            ? tokens.base.colors.sys.bg.accent
            : tokens.base.colors.sys.bg.primary;
        break;
      case 'primary':
      default:
        backgroundColor =
          tokens.theme === 'light'
            ? tokens.base.colors.sys.bg.primary
            : tokens.base.colors.sys.bg.accent;
        break;
    }

    return `background-color: ${backgroundColor};`;
  }}
`;

export const ScreenLayout: FC<OwnProps> = function ScreenLayout({
  bgVariant = 'primary',
  ...props
}) {
  return (
    <StyledSaveAreaView {...props} $bgVariant={bgVariant}>
      {props.children}
    </StyledSaveAreaView>
  );
};
