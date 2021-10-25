import React,{useState} from 'react';
import { Input } from 'antd';
const { Search } = Input;

function SearchFeature(props) {
    const [SearchTerm, setSearchTerm] = useState('');
    const searchHandler = e => {
        setSearchTerm(e.target.value);
        props.refreshFuntion(e.target.value);
    }
    return (
        <>
             <Search placeholder="검색어 입력" onChange={searchHandler} value={SearchTerm} style={{ width: '200px' }} />
        </>
    )
}

export default SearchFeature;
