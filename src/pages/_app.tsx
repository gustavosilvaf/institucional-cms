import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    const a = 2;

    return <Component {...pageProps} />;
}

export default MyApp;
