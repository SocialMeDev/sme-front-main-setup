import { memo, useState } from 'react'

import {
  Button,
  Text,
  Dot,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from 'components'
import { Arrow } from 'components/Icons/Interface'
import { useDisclosure, useSizeValue } from 'hooks'

function FilterByStatusMenu({
  defaultStatus = {},
  onChange,
  options = [],
  ...rest
}) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [selectedStatus, setSelectedStatus] = useState(defaultStatus)
  const menuItemFontSize = useSizeValue('xs', 'sm', 'md')

  const { label, color } = selectedStatus

  return (
    <Menu {...rest} closeOnSelect={false} isOpen={isOpen} onClose={onClose}>
      <MenuButton
        as={Button}
        rightIcon={<Arrow />}
        onClick={onOpen}
        colorScheme="gray"
      >
        {color !== '' ? (
          <Dot status={color} text={label} />
        ) : (
          <Text>{label}</Text>
        )}
      </MenuButton>
      <MenuList>
        {options.map(({ label, value, color }) => {
          const isSelected = label === selectedStatus.label

          return (
            <MenuItem
              key={label}
              fontSize={menuItemFontSize}
              onClick={() => {
                if (!isSelected) {
                  onClose()
                  setSelectedStatus({ label, color })
                  onChange(value)
                }
              }}
            >
              <Dot status={color} color={color} text={label} />
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default memo(FilterByStatusMenu)
