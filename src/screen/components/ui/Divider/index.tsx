import { mergeClassNames } from '@hitechline/reactools';
import { HTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  margin?: string;
  opacity?: number;
  background?: string;
}

export const Divider = ({
  className,
  margin = '5px',
  opacity = 0.15,
  background = '#000000',
  ...rest
}: Props): JSX.Element => (
  <Container
    {...rest}
    margin={margin}
    opacity={opacity}
    background={background}
    className={mergeClassNames('divider', className)}
  />
);
