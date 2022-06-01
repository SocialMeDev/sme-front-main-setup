import { useCallback, useEffect, useState } from 'react'
import Geocode from 'react-geocode'

import toast from 'utils/toast'

export default function useGeolocation() {
  const [coordinates, serCoordinates] = useState([])

  const loadGeocodeSettings = useCallback(() => {
    Geocode.setApiKey('AIzaSyAkPAwCTMLlZaL-5SzsPOh3tqKPWoS6TOc')
    Geocode.setLanguage('pt-BR')
    Geocode.setRegion('es')
    Geocode.setLocationType('ROOFTOP')
  }, [])

  const getUserCoordinatesByNavigator = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const { latitude, longitude } = position.coords

        serCoordinates([latitude, longitude])
      })
    } else {
      toast.error('Não tem geolocalização neste navegador')
    }
  }, [])

  const getUserCoordinatesByAddress = useCallback(async (address) => {
    try {
      const response = await Geocode.fromAddress(address)

      return response.results[0]
    } catch (error) {
      toast.error('Endereço inválido')
    }
  }, [])

  useEffect(() => {
    loadGeocodeSettings()
  }, [])

  return {
    coordinates,
    getUserCoordinatesByNavigator,
    getUserCoordinatesByAddress
  }
}
