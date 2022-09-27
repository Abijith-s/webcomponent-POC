import ACTION_CONSTANTS from "../actions/constant";

export const setTodoList = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.USER_DETAILS,
    payload: data,
  });
};

