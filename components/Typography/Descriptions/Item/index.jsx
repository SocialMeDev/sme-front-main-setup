import { memo, Fragment } from 'react'
import { Span } from 'components'

function DescriptionItem({
  labelColor = 'primary',
  valueColor = 'dark',
  textAlign = 'left',
  fontSize,
  label,
  value
}) {
  return (
    <Fragment>
      <Span textAlign={textAlign} fontSize={fontSize} color={labelColor}>
        {label || ''}:{' '}
        <Span fontSize={fontSize} color={valueColor}>
          {value || ''}
        </Span>
      </Span>
    </Fragment>
  )
}

export default memo(DescriptionItem)
