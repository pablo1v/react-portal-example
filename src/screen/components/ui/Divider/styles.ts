import styled from '@emotion/styled';
import { rgba } from 'polished';

interface ContainerProps {
  margin: string;
  opacity: number;
  background: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin: ${({ margin }) => margin} 0;
  border-top: 1px solid
    ${({ opacity, background }) => `${rgba(background, opacity)}`};
`;
