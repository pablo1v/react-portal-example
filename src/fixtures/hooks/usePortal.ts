import { useContext } from 'react';

import { Context as PortalContext } from '@fixtures/contexts/Portal';

const usePortal = () => useContext(PortalContext);

export default usePortal;
