import React,{useState} from 'react';
import { Collapse,Checkbox } from 'antd';
const { Panel } = Collapse;

function CheckBox(props) {
    const [Checked, setChecked] = useState([]); //check한 숫자가 들어가게 초기화
    const checkToggle = (value) => {
        //누른 Index를 구함
        const currentIdx = Checked.indexOf(value);
        //전체 Checked된 state에서 현재 누른 checkBox가 이미 있다면
        const newChecked = [...Checked];
        if(currentIdx === -1){ //해당 인덱스 없으면 넣어주고
            newChecked.push(value);
        }else{ //있으면 빼주고
            newChecked.splice(currentIdx, 1);
        }
        
        //state에 넣어줌
        setChecked(newChecked);
        props.handleFilters(newChecked); //부모 컨포넌트에 전달
    }

    const renderCheckBoxLists = ()=> props.list && props.list.map((val,index)=>(
        <React.Fragment key={index}>
            <Checkbox onChange={()=>checkToggle(val._id)}
                checked={Checked.indexOf(val._id) === -1 ? false : true}/>
            <span>&nbsp;{val.name}&nbsp;  </span>
        </React.Fragment>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="원하시는 상품을 선택해주세요" key="1">
                   {renderCheckBoxLists()}
                   
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox;
