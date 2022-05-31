import Box from '.'

export default {
  component: Box,
  title: 'Layout/Box/Default'
}

export const Default = (args) => {
  return <Box h="200px" w="200px" p={4} bg="primary" {...args} />
}
