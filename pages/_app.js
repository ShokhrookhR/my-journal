import { ThemeProvider } from '@mui/system';
import Layout from '../components/Layout/Layout';
import { theme } from '../theme';
import '../styles/globals.scss';
// import { Roboto } from '@next/font/google';

// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// });
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
