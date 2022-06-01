import { memo } from 'react'
import { AccordionItem } from '@chakra-ui/react'

function AccordionItemDefault({ children, ...rest }) {
  return (
    <AccordionItem
      borderWidth="1px"
      borderColor="borderColor"
      _last={{ borderTop: 'none' }}
      {...rest}
    >
      {children}
    </AccordionItem>
  )
}

export default memo(AccordionItemDefault)
