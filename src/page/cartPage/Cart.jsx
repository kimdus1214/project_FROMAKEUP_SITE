import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {getCartItems} from '../../_actions/user_actions';
import UserCartBlock from './sections/UserCartBlock';
import styled from 'styled-components';

const CartBlock = styled.div`
    width: 85%;
    margin: 3rem auto;
`;

const UserCartWrap = styled.div``;

function Cart(props) {
    const dispatch = useDispatch();
    useEffect(()=>{
        let cartItems =[];
        //리덕스 User state 안에 cart안에 상품이 들어있는지 확인
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart));
            }
        }
    },[props.user.userData]);

    return (
        <CartBlock>
            <h1>장바구니</h1>
            <UserCartWrap>
                <UserCartBlock products={props.user.cartDetail}/>
            </UserCartWrap>
        </CartBlock>
    )
}

export default Cart;
