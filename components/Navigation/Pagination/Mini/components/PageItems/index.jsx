import { memo } from 'react'
import { IconButton, Flex, Text } from 'components'
import { useSizeValue } from 'hooks'
import { Arrow5, Arrow8 } from 'components/Icons/ArrowsDiagrams'

const PageItems = ({ currentPage, onChangePage, maxPages }) => {
  const { format } = new Intl.NumberFormat('pt-BR')

  const iconSize = useSizeValue(6, 8, 10)
  const textSize = useSizeValue('sm', 'md', 'lg')

  return (
    <Flex align="center" gap={4}>
      <IconButton
        isDisabled={currentPage === 1}
        variant="ghost"
        icon={<Arrow8 boxSize={iconSize} />}
        rounded="full"
        _hover={{ bg: 'primary', color: 'light' }}
        onClick={() => onChangePage(currentPage - 1)}
      />

      <Text fontSize={textSize}>{format(currentPage)}</Text>
      <Text fontSize={textSize}>/</Text>
      <Text fontSize={textSize}>{format(maxPages)}</Text>
      <IconButton
        isDisabled={maxPages <= currentPage}
        variant="ghost"
        icon={<Arrow5 boxSize={iconSize} />}
        rounded="full"
        _hover={{ bg: 'primary', color: 'light' }}
        onClick={() => onChangePage(currentPage + 1)}
      />
    </Flex>
  )
}

export default memo(PageItems)
