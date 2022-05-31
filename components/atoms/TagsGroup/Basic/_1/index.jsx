import { memo } from 'react'
import { Text, Flex, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react'

function TagsGroup({ tags = [], emptyText, onRemoveTag }) {
  return (
    <Flex w="100%" flexWrap="wrap">
      {tags.length > 0 ? (
        <Flex>
          {tags.map(({ value, label, color }) => (
            <Tag
              mb={2}
              mr={2}
              rounded="md"
              variant="solid"
              key={label}
              colorScheme={color}
            >
              <TagLabel>{label}</TagLabel>

              {onRemoveTag && (
                <TagCloseButton
                  role="button"
                  onClick={() => onRemoveTag(value)}
                />
              )}
            </Tag>
          ))}
        </Flex>
      ) : (
        <Text color="weakText">{emptyText}</Text>
      )}
    </Flex>
  )
}

export default memo(TagsGroup)
