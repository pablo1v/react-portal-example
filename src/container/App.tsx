import { UI } from './UI';

import { Provider as PortalProvider } from '@resources/contexts/Portal';
import { GlobalStyle } from '@screen/styles/GlobalStyle';

export const App = (): JSX.Element => (
  <>
    <PortalProvider>
      <div id="app">
        <UI />
      </div>
    </PortalProvider>

    <GlobalStyle />
  </>
);
