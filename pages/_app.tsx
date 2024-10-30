import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'simplebar/dist/simplebar.min.css'
import { store } from '../store/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			{/* @ts-ignore */}
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
