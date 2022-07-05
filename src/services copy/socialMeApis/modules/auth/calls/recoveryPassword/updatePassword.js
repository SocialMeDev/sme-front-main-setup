import API from 'services/socialMeApis/modules/auth'
import toast from 'utils/toast'

export default async function updatePassword(
  { new_password, reset_login },
  { tkn, rqd, pnd }
) {
  const params = {
    operation: ['RecoveryPassword', 'UpdatePassword'],
    urlParams: {
      token: tkn,
      tokenId: rqd,
      personId: pnd
    },
    data: {
      new_password,
      reset_login
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
