import axios from 'axios';
import React,{useState} from 'react'
import styled from 'styled-components';
import FlieUpload from '../utils/FlieUpload';

const UploadProductBlock = styled.div`
    max-width: 700px;
    margin: 2rem auto;
`;

const UploadProductWrap = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const UploadForm = styled.form`
    width: 100%;
`;

const UploadLabel = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    input{
        width: 100%;
        height: 40px;
        padding: 0 10px;
        box-sizing: border-box;
        outline: none;
    }

    textarea{
        height: 60px;
        padding: 10px;
        box-sizing: border-box;
        outline: none;
    }

    select{
        width: 50%;
        height: 40px;
        margin-top: 15px;
        margin-bottom: 15px;
        outline: none;
    }
`;

const UploadProductBtn = styled.button`
    padding: 10px 20px;
`;

const Continents = [
    {key:1, value:"클렌징"},
    {key:2, value:"스킨케어"},
    {key:3, value:"눈가케어"},
    {key:4, value:"집중케어"},
    {key:5, value:"헤어/바디"},
    {key:6, value:"메이크업"},
    {key:7, value:"마스크팩"},
];

function UploadProduct(props) {
    const [Title, setTitle] = useState('');
    const [Desc, setDesc] = useState('');
    const [Price, setPrice] = useState('');
    const [Continent, setContinent] = useState(1);
    //이미지 업로드를 위한
    const [Images, setImages] = useState([]);

    const titleChange = e => setTitle(e.target.value);
    const priceChange = e => setPrice(e.target.value);
    const descChange = e => setDesc(e.target.value);
    const continentChange = e => setContinent(e.target.value);

    const updateImgs = (newImgs)=>{
        setImages(newImgs);
    }

    const submitHandler = e =>{
        e.preventDefault();

        if(!Title || !Desc || !Price || !Continent || !Images){
            return alert("필수 입력값을 확인해주세요");
        }

        //서버 정보를 req으로 보냄
        const body = {
            //login user id
            writer: props.user.userData._id,
            title: Title,
            description: Desc,
            price: Price,
            images: Images,
            continent: Continent
        }
        axios.post('/product',body)
        .then(response=>{
            if(response.data.success){
                alert("상품 업로드 성공!");
                props.history.push('/');
            }else{
                alert("상품 업로드 실패!");
            }
        })
    }
    
    return (
        <UploadProductBlock>
            <UploadProductWrap>
                <h2>상품 업로드</h2>
            </UploadProductWrap>

            <UploadForm onSubmit={submitHandler}>
                {/* 파일업로드 */}
                <FlieUpload refreshFunction={updateImgs} />

                <UploadLabel>
                    <label>상품명</label>
                    <input onChange={titleChange} value={Title}/>
                </UploadLabel>
                <UploadLabel>
                    <label>가격</label>
                    <input type="number" onChange={priceChange} value={Price}/>
                </UploadLabel>
                <UploadLabel>
                    <label>상세설명</label>
                    <textarea onChange={descChange} value={Desc} />
                </UploadLabel>
                <UploadLabel onChange={continentChange} value={Continent}>
                    <select>
                        {Continents.map(item=> (
                            <option key={item.key} value={item.key}>{item.value}</option>
                        ))}
                    </select>
                </UploadLabel>
                <UploadProductBtn type="submit">확인</UploadProductBtn>
            </UploadForm>
        </UploadProductBlock>
    )
}

export default UploadProduct;
