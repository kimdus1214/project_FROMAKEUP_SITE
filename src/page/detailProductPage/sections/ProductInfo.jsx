import React from 'react';
import { Descriptions, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../_actions/user_actions';

const CartBtnBlock = styled.div`
    display: flex;
    justify-content: center;
`;

function ProductInfo(props) {
    const dispatch = useDispatch();
    const clickHandler = ()=>{
        //필요한 정보(상품id, 갯수, 날짜)를 Cart 필드에 넣어줌
        dispatch(addToCart(props.detail._id));
    }

    return (
        <div>
            <Descriptions title="상품 정보" bordered>
                <Descriptions.Item label="가격">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="재고">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="조회수">{props.detail.veiws}</Descriptions.Item>
                <Descriptions.Item label="상품 설명">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <CartBtnBlock>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>장바구니</Button>
            </CartBtnBlock>
        </div>
    )
}

export default ProductInfo
