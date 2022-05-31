import { IconButton } from '@chakra-ui/react'

import { useFormsManager } from '../../../../contexts/FormsManager/Provider'
import { Arrow } from 'components/Icons/Interface'

export default function GoUpLevelButton({ index }) {
  const { goUpQuestionLevel } = useFormsManager()

  return (
    <IconButton
      disabled={index === 0 ? true : false}
      icon={<Arrow />}
      aria-label="Menu"
      variant="ghost"
      transform="rotate(180deg)"
      onClick={() => goUpQuestionLevel(index)}
    />
  )
}
