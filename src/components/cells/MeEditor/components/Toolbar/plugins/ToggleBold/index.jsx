import { forwardRef, memo } from 'react'

import ToggleIconButton from '../../components/CustomToggleIconButton'
import toggleTextModifier from '../../functions/toggleTextModifier'

import { Bold } from 'components/atoms/Icons/Interface'

const ToggleBold = forwardRef(({ size, ...rest }, ref) => {
  return (
    <ToggleIconButton
      actionDescription="Negrito"
      aria-label="Alternando o texto para bold"
      icon={<Bold />}
      size={size}
      onClick={() => toggleTextModifier('bold', ref)}
      keyCode="Ctrl+B"
      {...rest}
    />
  )
})

export default memo(ToggleBold)
