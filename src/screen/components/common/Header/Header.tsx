import { useEffect, useCallback } from 'react';

import Divider from '../../ui/Divider';

import useFade from '@fixtures/hooks/useFade';
import useOutClick from '@fixtures/hooks/useOutClick';

import styles from './Header.module.css';

const Header = () => {
  const { props, hide, show, isShowing } = useFade();
  const { ref, addListener, removeListener } = useOutClick<HTMLDivElement>();

  const handleOutClick = useCallback(() => {
    if (!isShowing) {
      return;
    }

    hide();
  }, [hide, isShowing]);

  useEffect(() => {
    addListener(handleOutClick);

    return () => {
      removeListener(handleOutClick);
    };
  }, [addListener, removeListener, handleOutClick]);

  return (
    <header className={styles.container}>
      <div className={`main-content ${styles.content}`}>
        <div className={styles.brand}>
          <img src="/favicon.ico" alt="Logo" />
        </div>

        <nav className={styles.navigation}>
          <a href="/#">Link</a>
          <a href="/#">Link</a>
          <a href="/#">Link</a>
        </nav>

        <div className={styles['user-container']}>
          <button type="button" onClick={() => show()}>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
              alt="Avatar"
            />
          </button>

          <div ref={ref} {...props}>
            <div className={styles['user-dropdown']}>
              <h3>Usuário</h3>

              <Divider />

              <div className={styles['user-dropdown-navigation']}>
                <button type="button">Sair</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
