import { Fragment } from 'react'
import { Box, Text } from '@chakra-ui/react'
import useUser from 'hooks/useUserInformation'

export default function UserContainer() {
  const { haveUser, getFullName } = useUser()
  const user = haveUser()

  if (!user) {
    return <Fragment />
  }

  return (
    <Box>
      <Text>{getFullName()}</Text>
    </Box>
  )
}
