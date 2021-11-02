import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {getCartItems, removeCartItems, onSuccessBuy} from '../../_actions/user_actions';
import UserCartBlock from './sections/UserCartBlock';
import styled from 'styled-components';
import { Empty, Result } from 'antd';
import Paypal from '../../components/utils/Paypal';

const CartBlock = styled.div`
    width: 85%;
    margin: 3rem auto;
`;

const UserCartWrap = styled.div``;

const UserPrice = styled.div`
    margin-top: 3rem;
    width:100%;
    display: flex;
    justify-content: end;
`;

const PaypalBlock = styled.div`
    width:100%;
    display: flex;
    justify-content: end;
`;

function Cart(props) {
    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0);
    const [ShowTotal, setShowTotal] = useState(false);
    const [ShowSuccess, setShowSuccess] = useState(false);
    
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
        setShowTotal(true);
    }


    const removeFromCart = (productId)=>{
        dispatch(removeCartItems(productId))
        .then(response=>{
            console.log(response);
            if(response.payload.productInfo.length <= 0){
                setShowTotal(false);
            }
        })
    }

    const transactionSuccess = (data) =>{
        // 액션에 두 가지를 넘겨줘야함
        // payment, user 컬렉션에 정보를 각각 저장해야하므로,
        // paymentData: 결제 성공 후 paypal에서 전달하는 정보
        // cartDetail 정보
        dispatch(onSuccessBuy({
            paymentData : data,
            cartDetail: props.user.cartDetail
        }))
        .then(response=>{
            if(response.payload.success){
                setShowTotal(false);
                setShowSuccess(true);
            }
        })
    }

    return (
        <CartBlock>
            <h1>장바구니</h1>
            <UserCartWrap>
                <UserCartBlock products={props.user.cartDetail} removeItem={removeFromCart}/>
            </UserCartWrap>

            {ShowTotal ?
                <UserPrice>
                    <h2>Total: {Total}원</h2>
                </UserPrice>
            : ShowSuccess ? 
                <Result
                status="success"
                title="Successfully Purchased Cloud Server ECS!"
                />
                : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            }

            {ShowTotal && 
                <PaypalBlock>
                    <Paypal total={Total} onSuccess={transactionSuccess}/>
                </PaypalBlock>   
            }
                    
        </CartBlock>
    )
}

export default Cart;
