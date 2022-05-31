import { memo } from 'react'
import { AccordionButton } from '@chakra-ui/react'

import { Skeleton, Flex, Text } from 'components'

import { Arrow } from 'components/Icons/Interface'

function AccordionButtonDefault({ isLoading = false, isExpanded, title }) {
  return (
    <AccordionButton
      rounded="none"
      _hover={!isLoading && { color: 'light', bg: 'primary' }}
    >
      <Skeleton isLoaded={!isLoading}>
        <Flex gap={4} align="center">
          <Arrow transform={isExpanded && 'rotateX(180deg)'} />
          <Text>{title}</Text>
        </Flex>
      </Skeleton>
    </AccordionButton>
  )
}

export default memo(AccordionButtonDefault)
