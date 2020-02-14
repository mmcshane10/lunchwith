import constants from './../constants';
const { initialState, types } = constants;

const userReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.NEW_USER:
      if (action.currentUser != null) {
        return {
					...state,
					id: action.currentUser['id'],
					firstName: action.currentUser['firstName'],
					lastName: action.currentUser['lastName'],
          email: action.currentUser['email'],
        };
      } else {
        return {
          ...state,
          id: null,
          firstName: null,
					lastName: null,
					email: null
        };
      }
    default:
      return state;
  }
};

export default userReducer;