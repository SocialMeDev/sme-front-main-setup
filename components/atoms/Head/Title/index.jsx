import { memo } from 'react'
import Head from 'next/head'

function TitleHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default memo(TitleHead)
