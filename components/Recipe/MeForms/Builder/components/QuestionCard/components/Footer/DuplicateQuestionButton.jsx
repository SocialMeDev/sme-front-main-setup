import { IconButton } from '@chakra-ui/react'

import { useFormsManager } from '../../../../contexts/FormsManager/Provider'
import { CopyDuplicateObjectAddPlus } from 'components/atoms/Icons/Interface'

export default function DuplicateQuestionButton({ question }) {
  const { duplicateFormField } = useFormsManager()

  return (
    <IconButton
      icon={<CopyDuplicateObjectAddPlus />}
      aria-label="Menu"
      variant="ghost"
      onClick={() => duplicateFormField(question)}
    />
  )
}
