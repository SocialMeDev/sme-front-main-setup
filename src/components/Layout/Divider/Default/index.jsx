import { memo } from 'react'

import { Box } from 'components'
import { Divider } from '@chakra-ui/react'

import DividerWithText from './components/DividerWithText'
import DividerWithComponent from './components/DividerWithComponent'

function DividerDefault({ children, text, spacing = 4, ...rest }) {
  if (text) {
    return <DividerWithText {...rest} text={text} />
  }

  if (children) {
    return <DividerWithComponent {...rest}>{children}</DividerWithComponent>
  }
  return (
    <Box my={spacing}>
      <Divider p={0} {...rest} />
    </Box>
  )
}

export default memo(DividerDefault)
