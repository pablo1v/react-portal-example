import { useContext } from 'react';

import { Context, ContextData } from '@resources/contexts/Portal';

export function usePortal(): ContextData {
  const context = useContext(Context);

  if (!context) {
    throw new Error('"usePortal()" must be used within a Portal Provider.');
  }

  return context;
}
