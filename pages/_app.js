import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href="img/favicon.ico" />
        <meta name="description" content="personal portfolio" />
        <meta property="og:title" content="Melytop" />
<meta property="og:description" content="Personal portfolio" />
<meta property="og:image" content="https://melytop.fr/img/thumb/melytopbanner.jpg?v=2" />
<meta property="og:image:alt" content="image" />
<meta property="og:url" content="https://melytop.fr/" />
<meta property="og:type" content="website" />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
