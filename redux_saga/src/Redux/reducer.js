import { FETCH_USER_SUCCESS } from "./actionType";

const initialState = {
  user: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.users,
      };
    default:
      return state;
  }
};
