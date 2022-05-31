import { memo } from 'react'
import { Button } from '@chakra-ui/react'

const PageItems = ({ currentPage, choosePages, onChangePage }) => {
  return (
    <>
      {choosePages.map((page) => {
        const samePage = page.value === currentPage

        return (
          <Button
            onClick={() => onChangePage(page.value)}
            key={page.value}
            mr="1"
            px="4"
            py="2"
            rounded="md"
            border="1px solid"
            borderColor="borderColor"
            color={samePage ? 'white' : 'primary'}
            bg={samePage ? 'primary' : 'white'}
            cursor="pointer"
            transition="all 0.4s"
            _hover={{ color: 'white', bg: 'primary' }}
          >
            {page.label}
          </Button>
        )
      })}
    </>
  )
}

export default memo(PageItems)
