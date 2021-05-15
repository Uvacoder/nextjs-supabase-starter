import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  children?: string;
}

const MetaHead = ({ title, children }: Props): React.ReactElement => {
  return (
    <Head>
      <title>{children ?? `${title} – Ultimo Pase`}</title>
    </Head>
  );
};

export default MetaHead;
