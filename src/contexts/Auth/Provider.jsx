import { useCallback, useState, useContext, useEffect } from 'react'

import AuthContext from './Context'

import { setStorage } from 'helpers/sirStorage'

import setLogout from 'services/auth/user/logout'
import setLogoutAll from 'services/auth/user/logoutAll'
import connectUser from './Actions/authenticateUser'
import removeUserFromUserList from './Actions/removeUserFromUserList'
import destroyUserPositionCookie from './Actions/destroyUserPositionCookie'
import getUserList from './Actions/getUserList'
import verifyUserToken from './Actions/verifyUserToken'
import { Loader } from 'components'

function AuthProvider({ children }) {
  const [user, setUser] = useState({})
  const [userList, setUserList] = useState([])
  const [isUserLogged, setIsUserLogged] = useState(false)
  const [finishedUserListLogic, setFinishedUserListLogic] = useState(false)
  const [finishedUserLogic, setfinishedUserLogic] = useState(false)

  const checkUserToken = useCallback(async (selecetdUserPosition) => {
    setfinishedUserLogic(false)

    const response = await verifyUserToken(selecetdUserPosition)

    if (response.header.success) {
      setUser(response.body.person)
      setIsUserLogged(true)
    }

    setfinishedUserLogic(true)
  }, [])

  useEffect(() => {
    async function loadAsyncFunction() {
      await checkUserToken()
    }

    loadAsyncFunction()
  }, [])

  useEffect(() => {
    async function loadAsyncFunction() {
      const userList = await getUserList()

      setUserList(userList)

      setFinishedUserListLogic(true)
    }

    loadAsyncFunction()
  }, [])

  const desconnectUserInList = useCallback(
    async (userId) => {
      setUserList(
        userList.map((user) => {
          if (user.id !== userId) return user
          return { ...user, token_status: 'INACTIVE' }
        })
      )
    },
    [userList]
  )

  const setTemporaryUser = useCallback(async (user) => {
    setUser(user)
  }, [])

  const setNewUser = useCallback(async (user, userIndex) => {
    const userPositionCookie = process.env.NEXT_PUBLIC_USER_POSITION_COOKIE

    await setStorage(userPositionCookie, userIndex)

    setUser(user)
    setIsUserLogged(true)
  }, [])

  const logoutAll = useCallback(async () => {
    const response = await setLogoutAll()

    if (response.header.success) {
      const newUserList = userList.map((item) => {
        return { ...item, token_status: 'INACTIVE' }
      })

      setUser({})
      setIsUserLogged(false)
      setUserList(newUserList)

      destroyUserPositionCookie()
    }
  }, [userList])

  const logout = useCallback(async () => {
    const response = await setLogout()

    if (response.header.success) {
      const newUserList = userList.map((item) => {
        if (item.id !== user.id) return item
        return { ...item, token_status: 'INACTIVE' }
      })

      setUser({})
      setUserList(newUserList)
      setIsUserLogged(false)
      destroyUserPositionCookie()
    }
  }, [user, userList])

  const removeUserInList = useCallback(
    async (removedUser) => {
      const newUserList = await removeUserFromUserList(removedUser, userList)

      if (removedUser.id === user.id) {
        setUser({})
        setIsUserLogged(false)

        await destroyUserPositionCookie()
      }

      setUserList(newUserList)
    },
    [user, userList]
  )

  const authenticateUser = useCallback(
    async (newUser) => {
      const { user, alreadyExist } = await connectUser(newUser, userList)

      setIsUserLogged(true)

      let newUserList = [...userList, user]

      if (alreadyExist) {
        newUserList = userList.map((item) => {
          if (item.id !== user.id) return item
          return { ...user, token_status: 'ACTIVE' }
        })
      }

      setUserList(newUserList)
    },
    [userList]
  )

  return (
    <AuthContext.Provider
      value={{
        isUserLogged,
        user,
        userList,
        finishedUserLogic,
        logout,
        logoutAll,
        setNewUser,
        setTemporaryUser,
        removeUserInList,
        desconnectUserInList,
        authenticateUser
      }}
    >
      {finishedUserLogic && finishedUserListLogic ? (
        <>{children}</>
      ) : (
        <Loader h="100vh" text="Carregando" />
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
