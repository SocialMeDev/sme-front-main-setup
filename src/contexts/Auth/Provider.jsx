import { useCallback, useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

import AuthContext from './Context'
import AuthReducer from './Reducer'
import { deleteStorage } from 'utils/helpers/sirStorage'
import { getCookieName } from 'utils/helpers/sirVariables'

import setLogout from 'services/socialMeApis/modules/auth/calls/user/logout'
import setLogoutAll from 'services/socialMeApis/modules/auth/calls/user/logoutAll'
import setAuthenticatedUser from './Actions/setAuthenticatedUser'
import setRemoveAuthUser from './Actions/setRemoveUserFromList'
import setUser from './Actions/setUser'
import setUserList from './Actions/setUserList'
import verifyUserToken from './Actions/verifyUserToken'
import updateUser from './Actions/updateUser'
import { Box, Loader } from 'components'

function AuthProvider({ children }) {
  const { query } = useRouter()

  const initialStates = {
    user: {},
    userList: [],
    userPosition: false,
    finishedUserListLogic: false,
    finishedUserLogic: false
  }

  const [state, dispatch] = useReducer(AuthReducer, initialStates)

  const {
    user,
    userPosition,
    userList,
    finishedUserListLogic,
    finishedUserLogic
  } = state

  const checkUserToken = useCallback(async (selecetdUserPosition) => {
    dispatch({
      type: 'Loading'
    })

    const response = await verifyUserToken(selecetdUserPosition)

    if (response.header.success) {
      dispatch({
        type: 'SetUser',
        payload: {
          user: response.body.person,
          userPosition: response.position
        }
      })
    }

    dispatch({
      type: 'StopLoading'
    })
  }, [])

  useEffect(() => {
    async function loadAsyncFunction() {
      await checkUserToken(query.userPosition)
    }

    if (query.userPosition) {
      loadAsyncFunction()
    } else {
      dispatch({
        type: 'StopLoading'
      })
    }
  }, [query.userPosition])

  useEffect(() => {
    async function loadAsyncFunction() {
      await checkUserToken()
    }

    loadAsyncFunction()
  }, [])

  useEffect(() => {
    async function loadAsyncFunction() {
      await setUserList(dispatch)

      dispatch({
        type: 'StopLoadingUserList'
      })
    }

    loadAsyncFunction()
  }, [])

  const desconnectUserInList = useCallback(async (userId) => {
    dispatch({
      type: 'DesconnectUserInList',
      userId
    })
  }, [])

  const setTemporaryUser = useCallback(async (user) => {
    dispatch({
      type: 'SetUser',
      payload: {
        user,
        userPosition: false
      }
    })
  }, [])

  const setNewUser = useCallback(async (user, userIndex) => {
    await setUser(userIndex)

    dispatch({
      type: 'SetUser',
      payload: {
        user,
        userPosition: userIndex
      }
    })
  }, [])

  const logoutAll = useCallback(async () => {
    const response = await setLogoutAll()

    if (response.header.success) {
      const userPositionCookie = getCookieName('userPosition')

      dispatch({
        type: 'DisconnectAllUsers'
      })

      await deleteStorage(userPositionCookie)
    }
  }, [])

  const logout = useCallback(async () => {
    const response = await setLogout()

    if (response.header.success) {
      dispatch({
        type: 'DisconnectUser',
        payload: userPosition
      })

      await updateUser()
    }
  }, [userPosition])

  const removeUserInList = useCallback(
    async (removedUser) => {
      const newUserList = await setRemoveAuthUser(removedUser, userList)

      dispatch({
        type: 'RemoveUserInList',
        payload: newUserList
      })
    },
    [userList]
  )

  const authenticateUser = useCallback(
    async (newUser) => {
      const newuserIndex = await setAuthenticatedUser(
        dispatch,
        newUser,
        userList
      )

      return newuserIndex
    },
    [userList]
  )

  return (
    <AuthContext.Provider
      value={{
        user,
        userPosition,
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
        <Box>{children}</Box>
      ) : (
        <Loader h="100vh" text="Carregando" />
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
