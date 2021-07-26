import { HYDRATE } from 'next-redux-wrapper';

// 기본 state
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  }

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

// async action creator

// action creator
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  }
}


// reducer: (이전상태, 액션) => 다음상태를 만들어내는 함수
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'LOG_IN':
      // 항상 새로운 것을 리턴
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        }
      };
    case 'LOG_OUT':
      // 항상 새로운 것을 리턴
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        }
      };
    default:
      return state;
  }
};

export default rootReducer;