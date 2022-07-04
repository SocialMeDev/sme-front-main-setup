import { memo, useState } from 'react'

import { Box, IconButton } from 'components'
import { Bubble11, Bubble5 } from 'components/Icons/MessagesChat'

function MessageButton() {
  const [notification, setNotification] = useState(false)

  function ToogleNotification() {
    setNotification(!notification)
  }

  return (
    <IconButton
      aria-label="Menu"
      variant="ghost"
      onClick={() => ToogleNotification()}
      icon={
        notification ? (
          <>
            <Bubble11 />
            <Box
              pos="absolute"
              top="2px"
              right="2px"
              p="4px"
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              rounded="full"
            />
          </>
        ) : (
          <Bubble5 />
        )
      }
      size="sm"
    />
  )
}

export default memo(MessageButton)
