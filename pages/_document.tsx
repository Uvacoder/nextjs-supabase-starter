import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import type { DocumentContext } from 'next/document';
import { CssBaseline } from '@geist-ui/react';

class MyDocument extends Document {
  static getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = CssBaseline.flush();

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      ),
    };
  };

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
