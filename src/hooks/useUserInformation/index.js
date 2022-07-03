import { useCallback } from 'react'
import { useAuth } from 'contexts/Auth/Provider'

import {
  capitalizeString,
  getFormattedAvatarUrl
} from 'utils/transforms/string'
import { brazilianTelephoneMask, cnpjMask, cpfMask } from 'utils/masks'

export default function useUserInformation() {
  const { user } = useAuth()

  const getFullName = useCallback(() => {
    return capitalizeString(user.name)
  }, [])

  const getAvatar = useCallback(() => {
    return getFormattedAvatarUrl(user) || ''
  }, [])

  const getLogin = useCallback(() => {
    return cpfMask(user.cpf_number) || cnpjMask(user.cnpj_number)
  }, [])

  const getLoginType = useCallback(() => {
    return user.kind === 'PF' ? 'CPF' : 'CNPJ'
  }, [])

  const getContact = useCallback(() => {
    const contact = user.main_contact

    if (!contact) return ''

    return contact.length < 12
      ? brazilianTelephoneMask(contact)
      : contact.toLowerCase()
  }, [])

  const getContactType = useCallback(() => {
    const contact = user.main_contact

    if (!contact) return ''

    return contact.length === 13 ? 'Telefone ( +00 (00) 00000-0000 )' : 'Email'
  }, [])

  const hasUser = useCallback(() => {
    if (!user) return
    if (Object.keys(user).length !== 0) {
      return true
    }
    return false
  }, [])

  return {
    getFullName,
    getContact,
    getContactType,
    getLogin,
    getLoginType,
    getAvatar,
    hasUser
  }
}
