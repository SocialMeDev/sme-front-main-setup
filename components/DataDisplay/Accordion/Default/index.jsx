import { memo } from 'react'
import { Accordion } from '@chakra-ui/react'

function AccordionDefault({ children, ...rest }) {
  return (
    <Accordion p={2} defaultIndex allowMultiple allowToggle {...rest}>
      {children}
    </Accordion>
  )
}

export default memo(AccordionDefault)
