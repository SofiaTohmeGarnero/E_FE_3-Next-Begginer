import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
      </Head>
      <body className="main">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
