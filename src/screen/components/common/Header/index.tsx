import { useOutClick } from '@hitechline/reactools';
import { useEffect, useCallback } from 'react';

import styles from './styles.module.css';

import { useFade } from '@resources/hooks/useFade';
import { Divider } from '@screen/components/ui/Divider';

export const Header = (): JSX.Element => {
  const { props, hide, show, isShowing } = useFade();
  const { ref, addListener, removeListener } = useOutClick<HTMLDivElement>();

  const showDropdown = useCallback(() => {
    setTimeout(() => {
      show();
    }, 0);
  }, [show]);

  const hideDropdown = useCallback(() => {
    if (!isShowing) {
      return;
    }

    hide();
  }, [hide, isShowing]);

  useEffect(() => {
    addListener(hideDropdown);

    return () => {
      removeListener(hideDropdown);
    };
  }, [addListener, removeListener, hideDropdown]);

  return (
    <header className={styles.container}>
      <div className={`main-content ${styles.content}`}>
        <div className={styles.brand}>
          <img src="/logo.png" alt="Logo" />
        </div>

        <nav className={styles.navigation}>
          <a href="/#">Link</a>
          <a href="/#">Link</a>
          <a href="/#">Link</a>
        </nav>

        <div className={styles['user-container']}>
          <button type="button" onClick={showDropdown}>
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
              alt="Avatar"
            />
          </button>

          <div ref={ref} {...props}>
            <div className={styles['user-dropdown']}>
              <h3>Usuário</h3>

              <Divider background="#ffffff" />

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
