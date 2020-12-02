import { useRef, useState, useEffect, useCallback } from 'react';

const useOutClick = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [listeners, setListeners] = useState<Listener[]>([]);

  const addListener = useCallback((listener: Listener) => {
    setListeners(currentListeners => currentListeners.concat(listener));
  }, []);

  const removeListener = useCallback((listener: Listener) => {
    setListeners(currentListeners =>
      currentListeners.filter(current => current !== listener),
    );
  }, []);

  const handleClick = useCallback(
    ({ target }: MouseEvent) => {
      const content = ref.current;

      if (!content || content.contains(target as Node)) {
        return;
      }

      listeners.forEach(listener => {
        listener();
      });
    },
    [ref, listeners],
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return {
    ref,
    addListener,
    removeListener,
  };
};

type Listener = () => void;

export default useOutClick;
