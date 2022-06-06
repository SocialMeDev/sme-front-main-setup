import { memo } from 'react'
import { Popup } from 'react-leaflet'

function PopupComponent({ children, ...rest }) {
  return <Popup {...rest}>{children}</Popup>
}

export default memo(PopupComponent)
