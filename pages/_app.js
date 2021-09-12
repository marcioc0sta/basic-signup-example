import GlobalStyle from "../styles/GlobalStyles";
import Head from "next/head";
import { Provider } from 'react-redux'
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Basic signup</title>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
