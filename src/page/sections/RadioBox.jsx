import React,{useState} from 'react';
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;

function RadioBox(props) {
    const [Value, setValue] = useState(0); //처음 _id:0으로 초기화
    
    const renderRadioBox = ()=> props.list && 
        props.list.map((val, index)=>(
            <Radio key={index} value={val._id}>{val.name} </Radio>
        ))
    

    const handleChange = e => {
        setValue(e.target.value);
        props.handleFilters(e.target.value);
    }


    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="원하시는 가격대를 선택해주세요" key="1">
                    <Radio.Group onChange={handleChange} value={Value}>
                        {renderRadioBox()}
                    </Radio.Group>                   
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox;
