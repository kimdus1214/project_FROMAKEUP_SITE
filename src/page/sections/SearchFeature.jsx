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
             <Search placeholder="input search text" onChange={searchHandler} value={SearchTerm} style={{ width: 200 }} />
        </>
    )
}

export default SearchFeature;
