import { memo, useMemo } from 'react'
import { HStack, Text, Tag } from '@chakra-ui/react'

import PopoverTags from './components/PopoverTags'

function TagsGroup({ tags = [], emptyText, totalTagsToShow, ...rest }) {
  const total = useMemo(() => {
    return totalTagsToShow || 1
  }, [totalTagsToShow])

  return (
    <HStack justify={['center', 'center', 'flex-start']} {...rest}>
      {tags.length > 0 ? (
        <HStack>
          {tags.slice(0, total).map(({ label, value, color }) => (
            <Tag key={value} variant="solid" colorScheme={color}>
              {label}
            </Tag>
          ))}
          <PopoverTags totalToShow={total} tags={tags} />
        </HStack>
      ) : (
        <Text color="weakText">{emptyText}</Text>
      )}
    </HStack>
  )
}

export default memo(TagsGroup)
