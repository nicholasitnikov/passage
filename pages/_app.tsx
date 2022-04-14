import 'antd/dist/antd.css';
import 'simplebar/dist/simplebar.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Slider, Switch } from 'antd';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
