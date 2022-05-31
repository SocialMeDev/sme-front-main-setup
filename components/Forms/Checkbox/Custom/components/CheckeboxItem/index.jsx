import { memo } from 'react'
import { Flex, Switch, Text, Heading } from 'components'
import { useColorModeValue } from 'hooks'
const CheckboxItem = ({ isChecked, title, description }) => {
  return (
    <Flex
      p={2}
      direction="column"
      gap={2}
      borderBottom="1px solid"
      borderColor="borderColor"
      transition="all 0.4s"
      _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
    >
      <Flex align="center" justify="space-between">
        <Heading>{title}</Heading>
        <Switch isChecked={isChecked} />
      </Flex>

      <Text>{description}</Text>
    </Flex>
  )
}

export default memo(CheckboxItem)
