import { memo, useState } from 'react'

import { IconButton, Box } from 'components'
import {
  BellNotification,
  BellNotifications3
} from 'components/atoms/Icons/Interface'

function NotificationButton() {
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
            <BellNotifications3 />
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
          <BellNotification />
        )
      }
    />
  )
}

export default memo(NotificationButton)