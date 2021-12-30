import RootProvider from '../Providers/rootProvider'
import {useStore} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import {ChakraProvider} from '@chakra-ui/react'
import './index.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import { wrapper } from '../store/configureStore'
import { SagaStore } from '../store/configureStore'



const MyApp = ({ Component, pageProps }:AppProps) => {
    const store : SagaStore = useStore()
    return(
        <PersistGate persistor={store.__persistor}>
            <ChakraProvider>
                <RootProvider>
                    <Component {...pageProps} />
                </RootProvider>
            </ChakraProvider>
        </PersistGate>
    )
}

export default wrapper.withRedux(MyApp)