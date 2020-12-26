import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import {Provider} from '@shopify/app-bridge-react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'




const client = new ApolloClient({
  
  fetchOptions: {
    credentials: 'include',
  },
 
});


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const  config = {apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forceRedirect: true }   //setting shopOrigin cookies in server.js
    return (
      <React.Fragment>
        <Head>
          <title>BS App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config = {config}>
            <AppProvider i18n={translations}>
                <ApolloProvider client={client}>
                    <Component {...pageProps} />
                    
                </ApolloProvider>          
            </AppProvider>   
        </Provider>
        
      </React.Fragment>
    );
  }
}

export default MyApp;