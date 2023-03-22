// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient,QueryClientProvider,Hydrate } from '@tanstack/react-query'
import React from 'react'



export default function App({ Component, pageProps }: AppProps) {

  const queryClient = React.useRef(new QueryClient())
  
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
