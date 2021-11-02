import axios from "axios";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER, 
  AUTH_USER,
  ADD_TO_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEMS,
  ON_SUCCESS_BUY
} from './type'


export function registerUser(dataToSubmit) {
  const request = axios
    .post("/register", dataToSubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/login", dataToSubmit)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get("/logout")
    .then((response) => response.data);
  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/auth")
    .then((response) => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function addToCart(id) { //상품아이디를 파라미터로 받음
  let body = {
    productId: id
  }
  const request = axios
    .post("/addToCart", body)
    .then((response) => response.data);
  return {
    type: ADD_TO_CART,
    payload: request,
  };
}

export function getCartItems(cartItems, userCart) {
  const request = axios
    .get(`/product/products_by_id?id=${cartItems}&type=array`)
    .then((response) =>{
      //cartItem들에 해당하는 정보들을
      //Product collection에서 가져온 후에 
      //Quantity 정보를 넣어줌
      userCart.forEach(cartItem => {
        response.data.forEach((productDetail, index)=>{
          if(cartItem.id === productDetail._id){
            response.data[index].quantity = cartItem.quantity;
          }
        })
      })
      //console.log(response.data);
      return response.data;
    }
  );
  return {
    type: GET_CART_ITEMS,
    payload: request,
  };
}

export function removeCartItems(productId) {
  const request = axios
    .get(`/user/removeFromCart?id=${productId}`)
    .then((response) =>{
      //productInfo, cart 정보를 조합해서 CartDetail 만듦
      response.data.cart.forEach(item=>{
        response.data.productInfo.forEach((product, index)=>{
          if(item.id === product._id){
            response.data.productInfo[index].quantity = item.quantity
          }
        })
      })
      return response.data;
    }
  );
  return {
    type: REMOVE_CART_ITEMS,
    payload: request,
  };
}

export function onSuccessBuy(data) {
  const request = axios
    .post('/user/successBuy', data)
    .then((response) =>response.data);
  return {
    type: ON_SUCCESS_BUY,
    payload: request,
  };
}

