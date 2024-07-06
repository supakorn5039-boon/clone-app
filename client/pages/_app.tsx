import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import RootLayout from 'app/component/Layout'


const MyApp = ({ Component, pageProps }: AppProps) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </QueryClientProvider>
    )
}

export default MyApp
