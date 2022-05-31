import { memo } from 'react'

import { Box } from 'components'

function RenderHtml({ html }) {
  return (
    <Box
      sx={{ 'ul, ol': { ps: '1rem' } }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default memo(RenderHtml)
