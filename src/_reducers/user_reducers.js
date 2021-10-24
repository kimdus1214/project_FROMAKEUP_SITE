import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_USER,
  ADD_TO_CART,
  GET_CART_ITEMS
} from "../_actions/user_actions";

export default function user(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
      // eslint-disable-next-line
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      // eslint-disable-next-line
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
      // eslint-disable-next-line
    case AUTH_USER:
      return { ...state, userData: action.payload };
      // eslint-disable-next-line
    case ADD_TO_CART:
      return { 
              ...state,
              userData: {
                ...state.userData,
                cart: action.payload //노드의 userInfo.cart
              }
            };
      // eslint-disable-next-line
    case GET_CART_ITEMS:
      return { ...state, cartDetail: action.payload }
    // eslint-disable-next-line
    default:
      return state;
  }
}
