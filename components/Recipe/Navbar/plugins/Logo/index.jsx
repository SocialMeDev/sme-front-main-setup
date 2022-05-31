import { memo } from 'react'
import { Image } from 'components'

function Logo({ src, alt, ...rest }) {
  return <Image boxSize="45px" src={src} alt={alt} {...rest} />
}

export default memo(Logo)
