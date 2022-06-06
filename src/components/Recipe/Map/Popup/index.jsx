import { memo } from 'react'
import { Marker } from 'react-leaflet'

function MarkerComponent({ icon, position = [0, 0], children, ...rest }) {
  return (
    <Marker icon={icon} position={position} {...rest}>
      {children}
    </Marker>
  )
}

export default memo(MarkerComponent)
