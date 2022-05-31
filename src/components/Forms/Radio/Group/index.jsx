import { memo } from 'react'

import { RadioGroup } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'

function RadioGroupDefault({ size = useSizeValue('sm', 'md', 'lg'), ...rest }) {
  return <RadioGroup size={size} {...rest} />
}

export default memo(RadioGroupDefault)
