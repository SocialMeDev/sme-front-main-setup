function getFormattedAddress(place) {
  const streat = place.address
  const streatNumber = place.address_number && `${place.address_number} - `
  const neighbourhood = place.address_neighbourhood
  const city = `, ${place.address_city}`
  const state = `- ${place.address_uf}`
  const cep = place.address_zip_code ? `/ ${place.address_number}` : ''

  let formattedAddress = `${streat} ${streatNumber} ${neighbourhood} ${city}  ${state} ${cep}`

  return formattedAddress
}

export default getFormattedAddress
