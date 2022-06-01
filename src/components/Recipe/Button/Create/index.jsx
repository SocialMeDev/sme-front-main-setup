import { memo } from 'react'

import { Button } from 'components'
import { Plus } from 'components/Icons/Interface'

function CreateButton({ children, ...rest }) {
  return (
    <Button variant="solid" leftIcon={<Plus />} {...rest}>
      {children}
    </Button>
  )
}

export default memo(CreateButton)
