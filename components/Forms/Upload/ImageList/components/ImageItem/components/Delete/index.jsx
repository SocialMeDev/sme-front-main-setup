import { memo, Fragment } from 'react'

import { Box, DeleteButton } from 'components'

function DeleteImage({ onDelete }) {
  return (
    <Fragment>
      <Box position="absolute" bottom={-3} right={-3}>
        <DeleteButton
          modalLogic={false}
          rounded="full"
          variant="solid"
          color="light"
          colorScheme="red"
          onClick={onDelete}
        />
      </Box>
    </Fragment>
  )
}

export default memo(DeleteImage)
