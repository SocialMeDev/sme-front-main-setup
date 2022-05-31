import { memo, useEffect, useState } from 'react'

import { Stack, Box, Loader, Text } from 'components'

function DescriptionsVertical({ data = {}, spacing = 0 }) {
  const [loadingContent, setLoadingContent] = useState(true)
  const [processedData, setProcessedData] = useState([])

  useEffect(() => {
    const array = []

    for (let key in data) {
      const newItem = {
        label: key,
        value: data[key]
      }
      array.push(newItem)
    }

    setProcessedData(array)
    setLoadingContent(false)
  }, [])

  if (loadingContent) {
    return <Loader />
  }

  return (
    <Stack spacing={spacing}>
      {processedData.map((item, index) => (
        <Box key={index}>
          <Text variant="primary">{item.label}:</Text>
          <Text variant="secondary">{item.value || '-'}</Text>
        </Box>
      ))}
    </Stack>
  )
}

export default memo(DescriptionsVertical)
