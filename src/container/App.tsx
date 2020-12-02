import { useRef } from 'react';

import Layout from '@screen/layouts/Default';
import Modal, {
  Handles as ModalHandles,
} from '@screen/components/forward/Modal';

import { Provider as PortalProvider } from '@fixtures/contexts/Portal';

// Global CSS
import '@styles/global/index.css';

const App = () => {
  const modalRef = useRef<ModalHandles>(null);

  return (
    <PortalProvider>
      <div id="app">
        <Layout>
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <h1>Title</h1>

              <button
                type="button"
                onClick={() => modalRef.current?.open()}
                style={{
                  marginTop: '10px',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  backgroundColor: '#8ab0ed',
                }}
              >
                Open Modal
              </button>
            </div>

            <Modal ref={modalRef}>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '15px',
                  borderRadius: '6px',
                }}
              >
                <h1>Modal</h1>
              </div>
            </Modal>
          </div>
        </Layout>
      </div>
    </PortalProvider>
  );
};

export default App;
