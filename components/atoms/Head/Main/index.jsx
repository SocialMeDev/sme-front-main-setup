import { memo } from 'react'
import Head from 'next/head'

function MainHead({ title, url, description, image }) {
  return (
    <Head>
      <meta charSet="utf-8" />

      <meta name="author" content="Social Me" />
      <meta name="robots" content="index, nofollow" />
      <meta name="description" content={description} />
      <link rel="canonical" href="Link único da página home do site" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <link href="https://plus.google.com/+SuaPágina" rel="publisher" />

      <meta name="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Nome do site" />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

      <meta name="twitter:url" content={url} />
      <meta name="twitter:type" content="website" />
      <meta name="twitter:site_name" content="Nome do site" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta
        name="google-signin-client_id"
        content="834864470626-9u1v2gdeupgjstmra2vjkr48ggr2cf0c.apps.googleusercontent.com"
      />
    </Head>
  )
}

export default memo(MainHead)
