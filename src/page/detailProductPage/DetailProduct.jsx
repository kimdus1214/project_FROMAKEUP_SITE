import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductImg from './sections/ProductImg';
import ProductInfo from './sections/ProductInfo';
import { Row, Col } from 'antd';

const DetailBlock = styled.div`
    width: 100%;
    padding: 3rem 4rem;
`;

const DetailWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
`;

function DetailProduct(props) {
    const [Product, setProduct] = useState({});
    const productId = props.match.params.productId;
    useEffect(()=>{
        axios.get(`/product/products_by_id?id=${productId}&type=single`)
            .then(response=> {
                if(response.data.success){
                    console.log("data",response.data);
                    setProduct(response.data.product[0]);
                }else{
                    alert("상품 정보를 가져오는데 실패했습니다");
                }
            })
    },[])


    return (
        <DetailBlock>
            <DetailWrap>
                <h1>{Product.title}</h1>
            </DetailWrap>
            
            <Row gutter={[16,16]}>
                <Col lg={12} sm={24}>
                    <ProductImg detail={Product}/>
                </Col>
                <Col lg={12} sm={24}>
                    <ProductInfo detail={Product} />
                </Col>
            </Row>
        </DetailBlock>
    )
}

export default DetailProduct;
