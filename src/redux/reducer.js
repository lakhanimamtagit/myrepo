import * as types from "./actionType";
const initialState = {
  users: [],
  user: {},
  docs: [],
  loading: false,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
      return {
        ...state,
        loading: true,
      };
      case types.LOAD_ARTICLE_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        docs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
