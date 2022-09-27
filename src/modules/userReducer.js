import ACTION_CONSTANTS from "../actions/constant";

// const userData = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : {};

const initialState = {
  todo: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.USER_DETAILS:
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};

export default user;