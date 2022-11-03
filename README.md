#  Next Best Dev


 ## _document.js file
 ```jsx
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
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

 ```

 ## next.config.js
 ```
i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
 ```# NextBestDev
