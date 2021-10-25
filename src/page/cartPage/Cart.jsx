import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {getCartItems} from '../../_actions/user_actions';
import UserCartBlock from './sections/UserCartBlock';
import styled from 'styled-components';

const CartBlock = styled.div`
    width: 85%;
    margin: 3rem auto;
`;

const UserCartWrap = styled.div``;

const UserPrice = styled.div`
    margin-top: 3rem;
`;

function Cart(props) {
    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0);
    
    useEffect(()=>{
        let cartItems =[];
        //리덕스 User state 안에 cart안에 상품이 들어있는지 확인
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                .then(response=> {
                    calculateTotal(response.payload);
                })
            }
        }
    },[props.user.userData]);

    const calculateTotal = (cartDetail)=>{
        let total = 0;
        cartDetail.map(item=>{
            total += parseInt(item.price, 10) * item.quantity;
        })
        setTotal(total);
    }

    return (
        <CartBlock>
            <h1>장바구니</h1>
            <UserCartWrap>
                <UserCartBlock products={props.user.cartDetail}/>
            </UserCartWrap>

            <UserPrice>
                <h2>Total: {Total}원</h2>
            </UserPrice>
        </CartBlock>
    )
}

export default Cart;
