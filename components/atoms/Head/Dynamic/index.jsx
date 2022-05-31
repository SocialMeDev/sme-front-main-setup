import { memo } from 'react'
import Head from 'next/head'

function DynamicHead({ title, url, description, image }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Social Me" />
      <meta name="description" content={description} />

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

      <title>{title}</title>
    </Head>
  )
}

export default memo(DynamicHead)
