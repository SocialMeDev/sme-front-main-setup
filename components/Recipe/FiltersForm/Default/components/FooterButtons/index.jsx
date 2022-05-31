import { memo } from 'react'

import { RefuseButton, Flex, Box, Button } from 'components'

import { Search1 } from 'components/Icons/Interface'

function FilterFooterButtons({
  loadingButton,
  onClose,
  resetFilters,
  showResetFilterButton,
  submitButtonText = 'Filtrar'
}) {
  return (
    <Flex justify="space-between" w="full">
      <Box>
        {showResetFilterButton && (
          <RefuseButton onClick={resetFilters}>Resetar filtros</RefuseButton>
        )}
      </Box>
      <Flex gap={2}>
        <Button onClick={onClose}>Cancelar</Button>
        <Button
          isLoading={loadingButton}
          leftIcon={<Search1 />}
          variant="solid"
          type="submit"
        >
          {submitButtonText}
        </Button>
      </Flex>
    </Flex>
  )
}

export default memo(FilterFooterButtons)
