import { memo, useEffect, useState } from 'react'

import { Stack, DescriptionItem, Loader } from 'components'

function Description({ data = {}, spacing = 0, itemProps, ...rest }) {
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
    <Stack spacing={spacing} {...rest}>
      {processedData.map(({ label, value }) => (
        <DescriptionItem
          key={label}
          label={label}
          value={value}
          {...itemProps}
        />
      ))}
    </Stack>
  )
}

export default memo(Description)
