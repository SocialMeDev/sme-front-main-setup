import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import semanticTokens from './tokens'
import colors from './colors'
import components from './components'
import fonts from './fonts'
import styles from './global'

const customTheme = extendTheme(
  {
    styles,
    colors,
    fonts,
    components,
    semanticTokens
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)

export default customTheme
