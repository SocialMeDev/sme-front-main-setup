import { memo } from 'react'
import { IconButton } from '@chakra-ui/react'

import { Arrow24 } from 'components/atoms/Icons/ArrowsDiagrams'
import { LinkWrapper } from 'components/atoms/Link/Basic'

function BackButton({ href, ...rest }) {
  return (
    <LinkWrapper href={href || '#'}>
      <IconButton
        {...rest}
        variant="ghost"
        aria-label="Search database"
        icon={<Arrow24 />}
      />
    </LinkWrapper>
  )
}

export default memo(BackButton)
