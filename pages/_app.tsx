import 'styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <ToastContainer />
    <Component {...pageProps} />
  </>
);

export default App;
