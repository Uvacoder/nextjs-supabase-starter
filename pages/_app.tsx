import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import 'tailwindcss/tailwind.css';
import 'inter-ui/inter.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
};

export default MyApp;
