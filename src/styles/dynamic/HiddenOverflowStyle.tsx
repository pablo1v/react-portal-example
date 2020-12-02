import { Global, css } from '@emotion/react';

const HiddenOverflowStyle = () => (
  <Global
    styles={css`
      body {
        overflow: hidden;
      }
    `}
  />
);

export default HiddenOverflowStyle;
