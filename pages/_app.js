import '../styles/globals.css';
import Header from '../components/shared/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} className />
    </>
  );
}

export default MyApp;