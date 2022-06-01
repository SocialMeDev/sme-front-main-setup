import { memo, useState } from 'react'
import { Button, Menu, MenuButton, MenuList, MenuItem } from 'components'
import { DoneCheck3, Arrow } from 'components/Icons/Interface'
import { useDisclosure, useSizeValue } from 'hooks'

function SortingMenu({ defaultName = '', options = [], onChange, ...rest }) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [currentName, setCurrentName] = useState(defaultName)
  const menuItemFontSize = useSizeValue('xs', 'sm', 'md')

  return (
    <Menu {...rest} closeOnSelect={false} isOpen={isOpen} onClose={onClose}>
      <MenuButton
        as={Button}
        rightIcon={<Arrow />}
        onClick={onOpen}
        colorScheme="gray"
      >
        Ordernar por {currentName.toLowerCase()}
      </MenuButton>
      <MenuList px={2}>
        {options.map(({ name, sort }) => {
          const isSelected = name === currentName

          return (
            <MenuItem
              key={name}
              color={isSelected && 'primary'}
              icon={isSelected && <DoneCheck3 />}
              fontSize={menuItemFontSize}
              onClick={() => {
                if (!isSelected) {
                  onClose()
                  setCurrentName(name)
                  onChange(sort)
                }
              }}
            >
              {name}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default memo(SortingMenu)
