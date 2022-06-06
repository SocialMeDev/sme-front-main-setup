import { memo } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

function MapContainerComponent({
  children,
  zoom = 18,
  maxBounds = [
    [-180, 180],
    [180, -180]
  ],
  center = [0, 0],
  style = { heigh: '100%', width: '100%' },
  ...rest
}) {
  return (
    <MapContainer
      style={style}
      center={center}
      zoom={zoom}
      maxBounds={maxBounds}
      {...rest}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {children}
    </MapContainer>
  )
}

export default memo(MapContainerComponent)
