import { type FC } from 'react';
import { Button } from '@/components/Button.tsx';
import styled from 'styled-components/native';

interface OwnProps {
  onModeChange: (mode: 'list' | 'scroll') => void;
  mode: 'list' | 'scroll';
}

const StyledContainer = styled.View`
  flex-direction: row;
  gap: 12px;
  padding: 16px 16px 0;
`;

const StyledButton = styled(Button)`
  flex-basis: 10%;
  flex-grow: 1;
`;

export const TabBar: FC<OwnProps> = function TabBar(props) {
  return (
    <StyledContainer>
      <StyledButton
        text={'Large list'}
        onPress={() => {
          props.onModeChange('list');
        }}
      />
      <StyledButton
        text={'Large scroll'}
        onPress={() => {
          props.onModeChange('scroll');
        }}
      />
    </StyledContainer>
  );
};
