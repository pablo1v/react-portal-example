import {
  useMemo,
  createRef,
  useCallback,
  createContext,
  ReactNode,
  ReactPortal,
} from 'react';
import { createPortal } from 'react-dom';

const elements = ['menus', 'modals'] as const;
const defaultPortalContextHandles = {} as Handles;

export const Context = createContext<Handles>(defaultPortalContextHandles);

export const Provider = ({ children }: PropsWithChildren) => {
  const portalElements = useMemo(
    () =>
      elements.map(elementId => {
        const ref = createRef<HTMLDivElement>();
        const element = <div ref={ref} />;

        return {
          ref,
          id: elementId,
          portal: createPortal(element, document.body),
        };
      }),
    [],
  );

  const getElement = useCallback(
    (elementId: typeof elements[number]) => {
      const element = portalElements.find(({ id }) => id === elementId);

      return element?.ref.current;
    },
    [portalElements],
  );

  const render = useCallback(
    (node: ReactNode, elementId: typeof elements[number]) => {
      if (!elements.includes(elementId)) {
        throw new Error('The inserted "element Id" not exists.');
      }

      const container = getElement(elementId);

      return createPortal(node, container || document.body);
    },
    [getElement],
  );

  return (
    <Context.Provider value={{ render, getElement }}>
      {children}

      {portalElements.map(({ portal }) => portal)}
    </Context.Provider>
  );
};

interface Handles {
  render(node: ReactNode, elementId: typeof elements[number]): ReactPortal;
  getElement(
    elementId: typeof elements[number],
  ): HTMLDivElement | null | undefined;
}
