export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
}

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      // 항상 새로운 것을 리턴
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,

      };
    case 'LOG_OUT':
      // 항상 새로운 것을 리턴
      return {
        ...state,
        isLoggedIn: false,
        user: null,

      };
    default:
      return state;
  }
}

export default reducer;