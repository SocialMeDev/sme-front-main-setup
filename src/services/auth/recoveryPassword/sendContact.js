import API from 'services/socialMeApis/modules/auth'
import toast from 'utils/toast'

export default async function sendContactToRecoveryPassword({
  login,
  main_contact
}) {
  const params = {
    operation: ['RecoveryPassword', 'SendContact'],
    data: {
      login: login.replace(/\D/g, ''),
      main_contact
    }
  }

  const response = await API(params)

  if (response.success) {
    toast.success(response.header.title)
  } else {
    toast.error(response.header.title)
  }

  return response
}
