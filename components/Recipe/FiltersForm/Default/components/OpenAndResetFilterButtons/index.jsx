import { memo } from 'react'

import { RefuseButton, Flex, Button } from 'components'

import { Search1 } from 'components/Icons/Interface'

function OpenAndResetFilterButtons({
  buttonProps,
  showResetFilterButton,
  onOpen,
  resetFilters
}) {
  return (
    <Flex gap={2}>
      <Button
        variant="ghost"
        leftIcon={<Search1 />}
        colorScheme="gray"
        onClick={onOpen}
        {...buttonProps}
      >
        Filtrar
      </Button>
      {showResetFilterButton && (
        <RefuseButton onClick={resetFilters}>Resetar filtros</RefuseButton>
      )}
    </Flex>
  )
}

export default memo(OpenAndResetFilterButtons)
