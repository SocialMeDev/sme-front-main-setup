import { memo } from 'react'
import { Checkbox, Text, Flex, HStack } from '@chakra-ui/react'

function CheckboxContent({ isChecked, title, description }) {
  return (
    <HStack
      w="100%"
      p={2}
      rounded="md"
      borderWidth="1px"
      borderColor={isChecked ? 'activeBg' : 'borderColor'}
      transition="all 0.4s"
    >
      <Flex minW="100%" direction="column" align="flex-start" gap={0}>
        <HStack w="100%" justify="space-between">
          <Text>{title}</Text>
          <Checkbox isChecked={isChecked} />
        </HStack>
        <Text variant="weak">{description}</Text>
      </Flex>
    </HStack>
  )
}

export default memo(CheckboxContent)
