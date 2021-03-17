import { useState, useCallback, CSSProperties, HTMLAttributes } from 'react';

export interface UseFadeManager {
  isShowing: boolean;
  props: HTMLAttributes<HTMLElement>;
  hide(): void;
  show(): void;
}

export function useFade(): UseFadeManager {
  const [isShowing, setIsShowing] = useState(false);
  const [style, setStyle] = useState<CSSProperties>(styles.hidden);

  const show = useCallback(() => {
    setIsShowing(true);
    setStyle(styles.showing);

    setTimeout(() => {
      setStyle(styles.shown);
    }, 300);
  }, []);

  const hide = useCallback(() => {
    if (!isShowing) {
      return;
    }

    setIsShowing(false);
    setStyle(styles.hiding);

    setTimeout(() => {
      setStyle(styles.hidden);
    }, 300);
  }, [isShowing]);

  return {
    hide,
    show,
    isShowing,
    props: {
      style,
    },
  };
}

const styles = {
  showing: {
    opacity: 0,
    transition: 'all 300ms',
    transform: 'translateY(-15px)',
  },
  shown: {
    opacity: 1,
    transition: 'all 300ms',
    transform: 'translateY(0)',
  },
  hiding: {
    opacity: 0,
    transition: 'all 300ms',
    transform: 'translateY(-15px)',
  },
  hidden: {
    opacity: 0,
    display: 'none',
    transition: 'all 300ms',
    transform: 'translateY(-15px)',
  },
};
