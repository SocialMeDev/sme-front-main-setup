import { memo, useCallback } from 'react'

import { Flex, Tag, TagLabel, TagCloseButton } from 'components'

function TagsList({ editTag, tags, size, removeTag, validate }) {
  const isValidValue = useCallback((value) => {
    if (!validate) return true

    return validate(value)
  }, [])

  return (
    <Flex gap={2} flexWrap="wrap">
      {tags.map((tag) => {
        return (
          <Tag
            cursor="pointer"
            key={tag}
            size={size}
            color="light"
            bg={isValidValue(tag) ? 'success' : 'danger'}
          >
            <TagLabel
              py={1}
              onClick={() => {
                editTag(tag)
                removeTag(tag)
              }}
            >
              {tag}
            </TagLabel>
            <TagCloseButton onClick={() => removeTag(tag)()} />
          </Tag>
        )
      })}
    </Flex>
  )
}

export default memo(TagsList)
