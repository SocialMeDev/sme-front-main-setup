import { memo } from 'react'

import { Radio } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function RadioDefault({ size = useSizeValue('sm', 'md', 'lg'), ...rest }) {
  return <Radio size={size} {...rest} />
}

export default memo(RadioDefault)
