import GlobalStyle from "../styles/GlobalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Basic signup</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
