import type { ComponentProps, FC } from 'react';
import { Text } from 'react-native';
import type { TypographyTheme } from '@jisr-hr/ds-foundation/mobile/jisr/light/typography-en.d.ts';
import styled from 'styled-components/native';

interface OwnProps extends ComponentProps<typeof Text> {
  textAlign?: 'center' | 'left' | 'right';
  colorVariant?: 'primary' | 'secondary' | 'alternative' | 'accent' | null;
  variant?: keyof TypographyTheme['typography'] | null;
}

const StyledText = styled.Text<{
  $variant: OwnProps['variant'];
  $colorVariant: OwnProps['colorVariant'];
  $align: OwnProps['textAlign'];
}>`
  ${({ $align }) => {
    if (!$align) return '';

    return `text-align: ${$align};`;
  }}

  ${({ theme, $variant }) => {
    if (!$variant) return '';

    const typographyStyle = theme.typography[$variant];

    return `
      font-family: ${typographyStyle.fontFamily}; 
      font-size: ${typographyStyle.fontSize}px;
      line-height: ${typographyStyle.lineHeight}px;
    `;
  }}

  ${({ theme: tokens, $colorVariant }) => {
    const getColor = () => {
      switch ($colorVariant) {
        case 'primary':
          return tokens.theme === 'light'
            ? tokens.base.colors.sys.text.primary
            : tokens.base.colors.sys.text.onAccent;
        case 'secondary':
          return tokens.base.colors.sys.text.secondary;
        case 'accent':
          return tokens.theme === 'light'
            ? tokens.base.colors.sys.text.state.success
            : tokens.base.colors.sys.text.state.danger;
        case 'alternative':
          return tokens.theme === 'light'
            ? tokens.base.colors.sys.text.onAccent
            : tokens.base.colors.sys.text.primary;
      }
    };

    return `
      color: ${getColor()};
    `;
  }}
`;

export const Typography: FC<OwnProps> = function Typography({
  textAlign,
  colorVariant = 'primary',
  variant = 'BodyMedium',
  ...props
}) {
  return (
    <StyledText {...props} $align={textAlign} $colorVariant={colorVariant} $variant={variant} />
  );
};
