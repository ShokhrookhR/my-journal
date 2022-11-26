import Layout from '../components/Layout';
import '../styles/globals.css';
// import { Roboto } from '@next/font/google';

// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// });
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
