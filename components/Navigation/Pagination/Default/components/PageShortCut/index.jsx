import { memo, useRef, useCallback, useMemo } from 'react'

import { Input, FormLabel, Flex } from 'components'
import { useHotKeyPressed } from 'hooks'

function Pagination({
  id = 'pagination-shortcut',
  limit = 10,
  totalItems,
  onChangePage
}) {
  const inputRef = useRef()

  const maxPages = useMemo(() => {
    return Math.ceil(totalItems / limit)
  }, [totalItems, limit])

  useHotKeyPressed('Enter', () => {
    if (inputRef?.current?.value) {
      goToPage(inputRef.current.value)
    }
  })

  const goToPage = useCallback(
    (page) => {
      const pageExist = page * limit < totalItems

      let newPage = pageExist ? Number(page) : maxPages

      if (page < 0) newPage = 1

      onChangePage(Number(newPage || 1))
    },
    [totalItems, limit]
  )

  return (
    <Flex align="center" gap={1} minW="max-content">
      <FormLabel htmlFor={id} m={0}>
        Ir para:{' '}
      </FormLabel>
      <Input id={id} ref={inputRef} p={2} w="50px" />
    </Flex>
  )
}

export default memo(Pagination)
