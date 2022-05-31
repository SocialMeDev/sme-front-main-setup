import { IconButton } from '@chakra-ui/react'

import { useFormsManager } from '../../../../contexts/FormsManager/Provider'
import { Arrow } from 'components/atoms/Icons/Interface'

export default function GoDownLevelButton({ index }) {
  const { goDownQuestionLevel, questions } = useFormsManager()

  return (
    <IconButton
      disabled={index + 1 === questions.length ? true : false}
      icon={<Arrow />}
      aria-label="Menu"
      variant="ghost"
      onClick={() => goDownQuestionLevel(index)}
    />
  )
}
