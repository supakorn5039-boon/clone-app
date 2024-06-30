import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { Provider } from 'react-redux'
import { store } from '../store/index'
import RootLayout from 'app/component/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const queryClient = new QueryClient()

    return (
        // <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </QueryClientProvider>
        // </Provider>
    )
}

export default MyApp
