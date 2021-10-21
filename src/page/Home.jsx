import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const CardBlock = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const CardList = styled.li`
    width: 24%;
    height: 350px;
    border: 1px solid #ddd;
`;

function Home() {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        // let body = {}
        axios.post('/product/products')
        .then(response=>{
            if(response.data.success){
                setProducts(response.data.productsInfo);
            }else{
                alert("상품들을 가져오는데 실패했습니다");
            }
        })
    }, [])

    const renderCards = Products.map((product, index)=>{
        console.log(product);
        return (
                <CardList><img src={`http://localhost:8000/${product.images[0]}`} /></CardList>
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
            <CardBlock>
                {renderCards}
            </CardBlock>        

            <AddMoreWrap>
                <AddMoreBtn>더보기</AddMoreBtn>
            </AddMoreWrap>


        </HomeBlock>
    )
}

export default Home;
