import 'styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useStore } from 'store/store';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
