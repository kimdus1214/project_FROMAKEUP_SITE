import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_USER,
  ADD_TO_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEMS,
  ON_SUCCESS_BUY
} from "../_actions/type";

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
    case REMOVE_CART_ITEMS:
      return { ...state, //userData의 cart를 하나 없애줘야 되고, cartDetail도 하나 없애줘야함
        cartDetail: action.payload.productInfo,
        userData: {
          ...state.userData,
          cart: action.payload.cart
        }
      }
    // eslint-disable-next-line
    case ON_SUCCESS_BUY:
      return { ...state, cartDetail: action.payload.cartDetail,
        userData: {
          ...state.userData, cart: action.payload.cart
        }
      }
    default:
      return state;
  }
}
