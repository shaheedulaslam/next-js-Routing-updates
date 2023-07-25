import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '@/context/store'
import ReduxProvider from '@/redux/redux-provider'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <GlobalContextProvider>
      <ReduxProvider>
    <Component {...pageProps} />
    </ReduxProvider>
    </GlobalContextProvider>
  ) 
}
