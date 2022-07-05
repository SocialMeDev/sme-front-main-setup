import API from 'services/socialMeApis/modules/auth'
import toast from 'utils/toast'

export default async function checkRecoveryPasswordToken({ tkn, rqd, pnd }) {
  const params = {
    operation: ['RecoveryPassword', 'CheckToken'],
    urlParams: {
      token: tkn,
      tokenId: rqd,
      personId: pnd
    }
  }

  const response = await API(params)

  if (!response.success) {
    toast.error(response.header.title)
  }

  return response
}
