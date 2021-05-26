import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { UserMenu } from '@/libs/components/.';
import 'tailwindcss/tailwind.css';
import 'inter-ui/inter.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GeistProvider>
        <CssBaseline />
        <UserMenu />
        <Component {...pageProps} />
      </GeistProvider>
      <style global jsx>{`
        .canvas {
          background-color: #ff4800;
          background-image: radial-gradient(#e3e3e3 1px, transparent 0),
            radial-gradient(#e3e3e3 1px, transparent 0);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px;
        }
      `}</style>
    </>
  );
};

export default MyApp;
