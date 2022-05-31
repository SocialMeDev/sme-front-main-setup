import { memo } from 'react'

import { PopoverCloseButton } from '@chakra-ui/react'

const PopoverCloseButtonDefault = ({ ...rest }) => {
  return <PopoverCloseButton {...rest} />
}

export default memo(PopoverCloseButtonDefault)
