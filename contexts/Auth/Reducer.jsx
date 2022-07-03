const reducer = (state, action) => {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        finishedUserLogic: false
      }
    case 'StopLoading':
      return {
        ...state,
        finishedUserLogic: true
      }
    case 'StopLoadingUserList':
      return {
        ...state,
        finishedUserListLogic: true
      }
    case 'SetUser': {
      const { user, userPosition } = action.payload

      return {
        ...state,
        user,
        userPosition
      }
    }

    case 'AddUserInList':
      return {
        ...state,
        userList: [...state.userList, action.payload]
      }

    case 'SetUserList':
      return {
        ...state,
        userList: action.payload
      }
    case 'UpdateUserInList':
      return {
        ...state,
        userList: state.userList.map((user) => {
          return user.id === action.payload.id ? action.payload : user
        })
      }
    case 'DesconnectUserInList':
      return {
        ...state,
        userList: state.userList.map((user) => {
          return user.id === action.userId
            ? { ...user, token_status: 'INACTIVE' }
            : user
        })
      }

    case 'DisconnectUser': {
      const userPosition = action.payload

      const { userList } = state

      userList[userPosition] = {
        ...userList[userPosition],
        token_status: 'INACTIVE'
      }

      return {
        ...state,
        user: {},
        userList,
        userPosition: false
      }
    }

    case 'DisconnectAllUsers':
      return {
        ...state,
        user: {},
        userPosition: false,
        userList: state.userList.map((user) => {
          return { ...user, token_status: 'INACTIVE' }
        })
      }
    default:
      return state
  }
}

export default reducer
