import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import {Row , Col , Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImgSlider from '../utils/ImgSlider';
import CheckBox from '../../page/sections/CheckBox';
import RadioBox from '../../page/sections/RadioBox';
import SearchFeature from '../../page/sections/SearchFeature';
import { continents, price } from '../../page/sections/Datas';
import { NavLink } from 'react-router-dom';

const HomeBlock = styled.div`
    width: 75%;
    margin: 3rem auto;
`;

const HomeTitWrap = styled.div`
    text-align: center;
    margin: 3rem auto;
`;
const CardBlock = styled(Card)`
    border: 1px solid #dbdbdb;
`;
const AddMoreWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem auto;
`;

const AddMoreBtn = styled.button`
    padding: 12px 35px;
    border-radius: 5px;
    cursor: pointer;
    background: #fff;
    border: 1px solid #333;

    &:hover{
        background: #333;
        color: #fff;
        transition: .3s;
    }
`;

const SearchBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem auto;
`;

function Home() {
    const [Products, setProducts] = useState([]);
    const [Skip, setSkip] = useState(0); //불러올 때 0부터 시작
    const [Limit, setLimit] = useState(8); //몇 개씩 불러올껀지
    const [PostSize, setPostSize] = useState(0);
    const [Filters, setFilters] = useState({
        continent: [],
        price: []
    });
    const [SearchTerm, setSearchTerm] = useState('');


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
                console.log(response.data);
                if(body.loadMore){
                    setProducts([...Products, ...response.data.productsInfo]);
                }else{
                    setProducts(response.data.productsInfo);
                }
                setPostSize(response.data.postSize);
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
            <Col lg={6} md={12} sm={24} key={index}>
                <CardBlock cover={<NavLink to={`/product/${product._id}`}><ImgSlider images={product.images} /></NavLink>}>
                        <Meta title={product.title} description={`${product.price} won`}/>
                </CardBlock> 
            </Col>
        )
    })


    const showFilterdResults = (filters)=>{
        let body = {
            skip: 0, //누를때마다 처음부터 다시 시작되야되기 때문
            limit: Limit,
            filters: filters
        }
        getProducts(body);
        setSkip(0);
    }


    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for(let key in data){
            if(data[key]._id === parseInt(value, 10)){
                array = data[key].array; //[0,29900]
            }
            console.log(data[key]);
        }
        return array;
    }

    const handleFilters = (filters, category)=>{ //filters 체크된 아이디가 담긴 새로운 배열이 담겨있음
        const newFilters = {...Filters}; //continents 와 price의 배열이 풀어져서 존재
        newFilters[category] = filters; //continents or price의 배열 <= CheckBox에서 newCheckd[1,2,3]을 받아오면 넣어줌

        console.log("filters", filters);
        if(category==="price"){
            let priceValues = handlePrice(filters); //console로 찍어본 거
            newFilters[category] = priceValues;
        }
        showFilterdResults(newFilters);
        setFilters(newFilters); //안해주면 현재 선택된 필터 배열만 나옴
    } 

    const updateSearchTerm = (newSearchTerm) => {
        let body = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }
        setSkip(0);
        setSearchTerm(newSearchTerm);
        getProducts(body);
    }

    return (
        <HomeBlock>
            <HomeTitWrap>
                <h2>전체상품</h2>
            </HomeTitWrap>

            {/* 필터 */}
            <Row gutter={[16,16]}>
                <Col lg={12} xs={24}>
                    <CheckBox list={continents} handleFilters={filters => handleFilters(filters, "continent")}/>
                    {/* 입력받은 filter: CheckBox에서 부모 컴포넌트(Home)로 전달한 newChecked
                    continent: 몽고디비-몽구스 스키마로 타입 지정해둔 이름(카테고리)에 해당하는 데이터를 가져옴 */}
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox list={price} handleFilters={filters => handleFilters(filters, "price")}/>
                </Col>
            </Row>

            {/* 검색 */}
            <SearchBlock>
                <SearchFeature refreshFuntion={updateSearchTerm}/>
            </SearchBlock>

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
