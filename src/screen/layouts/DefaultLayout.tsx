import { Header } from '@screen/components/common/Header';
import { MainContainerStyle } from '@screen/styles/MainContainerStyle';

export const DefaultLayout = ({ children }: PropsWithChildren): JSX.Element => (
  <MainContainerStyle id="layout">
    <Header />

    {children}
  </MainContainerStyle>
);
