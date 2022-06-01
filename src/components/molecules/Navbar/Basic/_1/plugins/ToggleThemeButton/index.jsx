import { memo } from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { Moon, Sun } from 'components/atoms/Icons/Weather'

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
