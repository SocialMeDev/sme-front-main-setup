import API from 'services/socialMeApis/modules/auth'
import toast from 'utils/toast'

export default async function cancelRecoveryPasswordToken({ tkn, rqd, pnd }) {
  const params = {
    operation: ['RecoveryPassword', 'CancelToken'],
    urlParams: {
      token: tkn,
      tokenId: rqd,
      personId: pnd
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
