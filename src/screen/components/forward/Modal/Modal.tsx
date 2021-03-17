import { useOutClick } from '@hitechline/reactools';
import { motion, AnimatePresence } from 'framer-motion';
import {
  useState,
  useEffect,
  forwardRef,
  useCallback,
  useImperativeHandle,
  Ref,
} from 'react';

import styles from './styles.module.css';
import type { Handles } from './types';

import { usePortal } from '@resources/hooks/usePortal';
import { HiddenOverflowStyle } from '@screen/styles/HiddenOverflowStyle';

export const Modal = forwardRef(
  ({ children }: PropsWithChildren, ref: Ref<Handles>) => {
    const [isOpen, setIsOpen] = useState(false);
    const { render } = usePortal();
    const {
      addListener,
      removeListener,
      ref: outClickRef,
    } = useOutClick<HTMLElement>();

    const handle = useCallback(() => {
      setIsOpen(currentOpenValue => !currentOpenValue);
    }, []);

    const open = useCallback(() => {
      setTimeout(() => {
        setIsOpen(true);
      }, 0);
    }, []);

    const close = useCallback(() => {
      if (!isOpen) {
        return;
      }

      setIsOpen(false);
    }, [isOpen]);

    useEffect(() => {
      addListener(close);

      return () => {
        removeListener(close);
      };
    }, [close, addListener, removeListener]);

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
                ref={outClickRef}
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
  },
);

Modal.displayName = 'Modal';
