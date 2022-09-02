import { AppProps } from 'next/app'

import { GlobalStyles } from '../../stitches.config'
import { CoffeContextProvider } from '../contexts/CoffeeContext'

export default function App({ Component, pageProps }: AppProps) {
  GlobalStyles()

  return (
    <CoffeContextProvider>
      <Component {...pageProps} />
    </CoffeContextProvider>
  )
}
