import { useCallback, useEffect, useState } from 'react'
import Geocode from 'react-geocode'

import toast from 'utils/toast'
import formatGoogleResponse from './utils/formatGoogleResponse'

export default function useGeolocation() {
  const [currentPosition, setCurrentPosition] = useState()

  const loadGeocodeSettings = useCallback(() => {
    Geocode.setApiKey('AIzaSyAkPAwCTMLlZaL-5SzsPOh3tqKPWoS6TOc')
    Geocode.setLanguage('pt-BR')
    Geocode.setRegion('es')
    Geocode.setLocationType('ROOFTOP')
  }, [])

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const { latitude, longitude } = position.coords

        setCurrentPosition([latitude, longitude])
      })
    } else {
      toast.error('Não tem geolocalização neste navegador')
    }
  }, [])

  const getCoordinatesByAddress = useCallback(async (address) => {
    try {
      const response = await Geocode.fromAddress(address)

      return response.results[0]
    } catch (error) {
      console.log('Endereço inválido', error)
    }
  }, [])

  const getCoordinatesByLatLon = useCallback(async ({ lat, lng }) => {
    try {
      const response = await Geocode.fromLatLng(String(lat), String(lng))

      const result = response.results[0]

      const formatedResult = formatGoogleResponse(result)

      return formatedResult
    } catch (error) {
      toast.error('Latitude e/ou longitude inválidos')
    }
  }, [])

  useEffect(() => {
    loadGeocodeSettings()
  }, [])

  return {
    currentPosition,
    getCoordinatesByAddress,
    getCoordinatesByLatLon
  }
}
