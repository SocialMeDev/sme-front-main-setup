import { memo } from 'react'
import { useColorMode } from '@chakra-ui/react'

import { IconButton } from '@chakra-ui/react'
import { Moon, Sun } from 'components/Icons/Weather'

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Theme button"
      variant="ghost"
      icon={colorMode === 'light' ? <Moon /> : <Sun />}
      onClick={toggleColorMode}
      size="sm"
    />
  )
}

export default memo(ThemeButton)
