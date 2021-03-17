import { Global, css } from '@emotion/react';

export const HiddenOverflowStyle = (): JSX.Element => (
  <Global
    styles={css`
      body {
        overflow: hidden;
      }
    `}
  />
);
