import { memo } from 'react'

import { ModalCloseButton } from '@chakra-ui/react'

const ModalCloseButtonDefault = ({ ...rest }) => {
  return <ModalCloseButton {...rest} />
}

export default memo(ModalCloseButtonDefault)
