import { memo } from 'react'
import { AccordionPanel } from '@chakra-ui/react'

function AccordionPanelDefault({ children, ...rest }) {
  return <AccordionPanel {...rest}>{children}</AccordionPanel>
}

export default memo(AccordionPanelDefault)
