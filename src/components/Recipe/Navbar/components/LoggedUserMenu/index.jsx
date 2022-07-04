import { memo, useMemo, useCallback, Fragment } from 'react'
import { useRouter } from 'next/router'

import {
  NextLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  Avatar
} from 'components'
import { getAppUrl } from 'utils/helpers/sirVariables'
import { getFormattedAvatarUrl } from 'utils/transforms/string'
import { useAuth } from 'contexts/Auth/Provider'

import { DeleteDisabled } from 'components/Icons/Interface'
import { GroupUser1 } from 'components/Icons/Users'
function LoggedUserMenu({ query }) {
  const { push } = useRouter()
  const { isUserLogged, user, logout } = useAuth()

  if (!isUserLogged) {
    return <Fragment />
  }

  const pathToManagerAccounts = useMemo(() => {
    const authUrl = getAppUrl('auth')

    return {
      pathname: `${authUrl}/auth/accounts`,
      query
    }
  }, [])

  const logoutUser = useCallback(async () => {
    await logout()

    await push('/')
  }, [])

  return (
    <Menu>
      <MenuButton>
        <Avatar
          src={getFormattedAvatarUrl(user)}
          alt={user.name}
          name={user.name}
        />
      </MenuButton>

      <MenuList color="dark">
        <NextLink href={pathToManagerAccounts}>
          <MenuItem icon={<GroupUser1 />}>Gerenciar contas</MenuItem>
        </NextLink>

        <MenuDivider />

        <MenuItem onClick={logoutUser} icon={<DeleteDisabled />} color="danger">
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default memo(LoggedUserMenu)
