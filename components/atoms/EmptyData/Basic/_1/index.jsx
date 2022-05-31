import { memo } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

import EmptyBox from './assets/empty-box.json'

import { Lotties } from 'components/atoms/Lotties/Basic'

function EmptyData({ title = '', description = '', ...rest }) {
  return (
    <Flex mt={4} gap={2} direction="column" align="center" {...rest}>
      <Lotties src={EmptyBox} />
      <Flex direction="column" align="center" gap={2}>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Flex>
    </Flex>
  )
}

export default memo(EmptyData)
