import { memo } from 'react'

import { Box } from 'components'
import { Divider } from '@chakra-ui/react'

import DividerWithText from './components/DividerWithText'
import DividerWithComponent from './components/DividerWithComponent'

function DividerDefault({ children, text, spacing = 2, ...rest }) {
  if (text) {
    return <DividerWithText {...rest} text={text} />
  }

  if (children) {
    return <DividerWithComponent {...rest}>{children}</DividerWithComponent>
  }
  return (
    <Box my={spacing}>
      <Divider {...rest} />
    </Box>
  )
}

export default memo(DividerDefault)
