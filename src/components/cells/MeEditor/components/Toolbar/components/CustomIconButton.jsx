import { memo } from 'react'
import { Tooltip, IconButton } from '@chakra-ui/react'

const CustomIconButton = ({ actionDescription, ...rest }) => {
  return (
    <Tooltip hasArrow label={actionDescription}>
      <IconButton
        variant="ghost"
        _hover={{
          bg: 'hoverBg',
          color: 'hoverColor'
        }}
        {...rest}
      />
    </Tooltip>
  )
}

export default memo(CustomIconButton)
