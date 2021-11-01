import React from 'react';
import styled from 'styled-components';

const CartTable = styled.table`
    border=collapse: collapse;
    width:100%;

    td,th{
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }

    tr: nth-child(even){
        background: #eee;
    }
`;

function UserCartBlock(props) {
    const renderCartImg = (imgs)=>{
        if(imgs.length > 0){
            let image = imgs[0];
            return `http://localhost:8000/${image}`
        }
    }
    const renderItems = () => ( props.products &&         
        props.products.map((product, index)=>(
            <tr key={index} style={{width:'100%'}}>
                <td>
                    <img style={{width: '70px'}} src={renderCartImg(product.images)} alt="product" />
                </td>
                <td>
                    {product.title}
                </td>
                <td>
                    {product.quantity}
                </td>
                <td>
                    {product.price}
                </td>
                <td>
                    <button onClick={()=>props.removeItem(product._id)}>삭제</button>
                </td>
            </tr>
        ))
    )

    return (
        <div>
            <CartTable>
                <thead>
                    <tr>
                        <th>이미지</th>
                        <th>상품</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </CartTable>
        </div>
    )
}

export default UserCartBlock
