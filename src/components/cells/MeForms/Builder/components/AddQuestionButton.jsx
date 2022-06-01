import { Flex, Icon, Text } from '@chakra-ui/react'

import { useFormsManager } from '../contexts/FormsManager/Provider'
import { PlusAdd } from 'components/atoms/Icons/Interface'
import { getAppColors } from 'utils/helpers/sirVariables'

export default function AddQuestionButton() {
  const { createFormField } = useFormsManager()

  return (
    <Flex
      rounded={'md'}
      overflow={'hidden'}
      p={2}
      w="full"
      borderWidth="2px"
      cursor="pointer"
      align="center"
      justify="center"
      transition="all 0.2s"
      onClick={() => createFormField()}
      _hover={{
        borderColor: getAppColors('primary.500'),
        color: getAppColors('primary.500')
      }}
    >
      <Icon fontSize="xl" as={PlusAdd} mr={2} />
      <Text fontSize="xl">Adicionar Questão</Text>
    </Flex>
  )
}
