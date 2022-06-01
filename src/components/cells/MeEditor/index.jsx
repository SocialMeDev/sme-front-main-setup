import { memo, forwardRef } from 'react'
import { Flex } from '@chakra-ui/react'

import Toolbar from './components/Toolbar'
import TextareaEditor from './components/TextareaEditor'

const MeEditor = forwardRef(({ editorProps, toolbarProps, ...rest }, ref) => {
  return (
    <Flex
      direction="column"
      borderWidth="1px"
      borderColor="borderColor"
      {...rest}
    >
      <Toolbar ref={ref} {...toolbarProps} />

      <TextareaEditor ref={ref} {...editorProps} />
    </Flex>
  )
})

export default memo(MeEditor)
