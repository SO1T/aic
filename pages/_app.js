import '@style/index.css';
import Head from 'next/head';
import { AppWrapper } from 'context';

function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default App
