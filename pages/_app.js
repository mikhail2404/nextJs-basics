import '../styles/globals.css'
import Layout from "../layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (<Layout>
    <Head>
      <meta name="description" content="Find a lot of great events that allow you to evolve..."/>
    </Head>
    <Component {...pageProps} />
  </Layout>)
}
