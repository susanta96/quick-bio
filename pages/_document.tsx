import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next Social Media bio in seconds."
          />
          <meta property="og:site_name" content="quick-bio.asdevs.dev" />
          <meta
            property="og:description"
            content="Generate your next Social Media bio in seconds."
          />
          <meta property="og:title" content="Social Bio Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Social Bio Generator" />
          <meta
            name="twitter:description"
            content="Generate your next Social Media bio in seconds."
          />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
