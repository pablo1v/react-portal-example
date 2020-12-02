import { motion, AnimatePresence } from 'framer-motion';
import {
  useState,
  useEffect,
  forwardRef,
  useCallback,
  useImperativeHandle,
  Ref,
} from 'react';

import usePortal from '@fixtures/hooks/usePortal';
import useOutClick from '@fixtures/hooks/useOutClick';

import styles from './Modal.module.css';
import HiddenOverflowStyle from '@styles/dynamic/HiddenOverflowStyle';

import { Handles } from './types';

const Modal = ({ children }: PropsWithChildren, ref: Ref<Handles>) => {
  const [isOpen, setIsOpen] = useState(false);
  const { render } = usePortal();
  const {
    addListener,
    removeListener,
    ref: contentRef,
  } = useOutClick<HTMLElement>();

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handle = useCallback(() => {
    setIsOpen(currentOpenValue => !currentOpenValue);
  }, []);

  const handleOutClick = useCallback(() => {
    if (!isOpen) {
      return;
    }

    close();
  }, [close, isOpen]);

  useEffect(() => {
    addListener(handleOutClick);

    return () => {
      removeListener(handleOutClick);
    };
  }, [addListener, removeListener, handleOutClick]);

  useImperativeHandle(ref, () => ({
    open,
    close,
    handle,
  }));

  const Element = (
    <AnimatePresence>
      {isOpen && (
        <>
          <HiddenOverflowStyle />

          <motion.div
            className={styles.container}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            initial={{
              opacity: 0,
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }}
            animate={{
              opacity: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
          >
            <motion.section
              ref={contentRef}
              className={styles.content}
              animate={{ scale: 1 }}
              initial={{ scale: 0.5 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 10 }}
            >
              {children}
            </motion.section>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return render(Element, 'modals');
};

export default forwardRef(Modal);
