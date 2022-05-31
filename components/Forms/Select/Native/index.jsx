import { memo, forwardRef } from 'react'
import { Select, keyframes } from '@chakra-ui/react'

import { useSizeValue } from 'hooks'
import { RefreshRotate3 } from 'components/Icons/Interface'

const NativeSelect = forwardRef(
  (
    { size = useSizeValue('xs', 'sm', 'md'), children, isLoading, ...rest },
    ref
  ) => {
    const spin = keyframes`
      from {transform: rotate(360deg);}
      to {transform: rotate(0deg)}
    `

    const spinAnimation = `${spin} infinite 1s linear`

    return (
      <Select
        {...rest}
        {...(isLoading && {
          disabled: true,
          icon: <RefreshRotate3 animation={spinAnimation} />
        })}
        ref={ref}
        size={size}
      >
        {children}
      </Select>
    )
  }
)

export default memo(NativeSelect)
