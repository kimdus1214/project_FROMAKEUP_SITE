import axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const AUTH_USER = "AUTH_USER";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART_ITEMS = "GET_CART_ITEMS";

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
      console.log(response.data);
      return response.data;
    }
  );
  return {
    type: GET_CART_ITEMS,
    payload: request,
  };
}

