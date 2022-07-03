import { memo, Fragment, useCallback } from 'react'

import { Flex, Tag, TagLabel, TagCloseButton } from 'components'

function TagsList({ updateTag, tags, size, removeTag, validate }) {
  const isValidValue = useCallback((value) => {
    if (!validate) return true

    return validate(value)
  }, [])

  const onUpdateTag = useCallback((tag) => {
    updateTag(tag)
    removeTag(tag)
  }, [])

  return (
    <Fragment>
      {tags.length > 0 && (
        <Flex gap={2} flexWrap="wrap">
          {tags.map((tag) => {
            return (
              <Tag
                cursor="pointer"
                color="light"
                bg={isValidValue(tag) ? 'success' : 'danger'}
                key={tag}
                size={size}
              >
                <TagLabel py={1} onClick={() => onUpdateTag(tag)}>
                  {tag}
                </TagLabel>
                <TagCloseButton onClick={() => removeTag(tag)} />
              </Tag>
            )
          })}
        </Flex>
      )}
    </Fragment>
  )
}

export default memo(TagsList)
