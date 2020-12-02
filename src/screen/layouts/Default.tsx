import Header from '@screen/components/common/Header';

import styles from '@styles/app.module.css';

const Default = ({ children }: PropsWithChildren) => (
  <div id="layout" className={styles.app}>
    <Header />

    {children}
  </div>
);

export default Default;
