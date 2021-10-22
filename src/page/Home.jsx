import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import {Row , Col , Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImgSlider from '../components/utils/ImgSlider';


const HomeBlock = styled.div`
    width: 75%;
    margin: 3rem auto;
`;

const HomeTitWrap = styled.div`
    text-align: center;
`;

const AddMoreWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const AddMoreBtn = styled.button`

`;

function Home() {
    const [Products, setProducts] = useState([]);
    const [Skip, setSkip] = useState(1); //불러올 때 0부터 시작
    const [Limit, setLimit] = useState(8); //몇 개씩 불러올껀지
    const [PostSize, setPostSize] = useState(0);

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit
        }
        getProducts(body);
    }, [])

    const getProducts = (body)=>{
        axios.post('/product/products', body)
        .then(response=>{
            if(response.data.success){
                if(body.loadMore){
                    setProducts([...Products, ...response.data.productsInfo]);
                }else{
                    setProducts(response.data.productsInfo);
                }
                setPostSize(response.data.PostSize);
            }else{
                alert("상품들을 가져오는데 실패했습니다");
            }
        })
    }

    const loadMoreHandler = ()=>{
        let skip = Skip + Limit; // 0+8, 8+8
        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true //더보기 버튼을 눌렀을 때 req로 받아오는 값
        }
        getProducts(body);
        setSkip(skip);
        setLimit(Limit);
    }

    const renderCards = Products.map((product, index)=>{
        //console.log(product);
        return (
            <Col lg={6} md={8} sm={24} key={index}>
                <Card cover={<ImgSlider images={product.images} />}>
                        <Meta title={product.title} description={product.price}/>
                </Card> 
            </Col>
        )
    })

    return (
        <HomeBlock>
            <HomeTitWrap>
                <h2>Let's Shopping!</h2>
            </HomeTitWrap>

            {/* 필터 */}
            {/* 검색 */}
            {/* 카드 */}
            <Row gutter={[16,16]}>
                {renderCards}
            </Row>

            {PostSize >= Limit &&
                <AddMoreWrap>
                    <AddMoreBtn onClick={loadMoreHandler}>더보기</AddMoreBtn>
                </AddMoreWrap>
            }
            


        </HomeBlock>
    )
}

export default Home;
