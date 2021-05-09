import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
