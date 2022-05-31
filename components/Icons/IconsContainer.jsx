import { memo } from 'react'
import { SimpleGrid, Stack, Text } from 'components'

const IconsContainer = ({ Icons, ...rest }) => {
  return (
    <SimpleGrid columns={[3, 4, 5]}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <Stack
          p={2}
          align="center"
          borderWidth="1px"
          borderColor="borderColor"
          key={name}
        >
          <Icon {...rest} />
          <Text>{name}</Text>
        </Stack>
      ))}
    </SimpleGrid>
  )
}

export default memo(IconsContainer)
