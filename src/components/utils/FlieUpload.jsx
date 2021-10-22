import React,{useState} from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { MdLibraryAdd } from "react-icons/md";
import axios from 'axios';

const FlieUploadBlock = styled.div`
    display: flex;
    justify-content: space-betewen;
    margin-bottom: 50px;
`;

const FileUploadWrap = styled.div`
    width: 300px;
    height: 240px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        font-size: 2rem;
        color: #b1b1b1;
    }
`;
const FileConfirm = styled.div`
    display: flex;
    width: 400px;
    height: 240px;
    overflow-y: scroll;
    
    div{
        width: 100%;
        height: 100%;

        img{
            min-width: 300px;
            width: 300px;
            overflow-x: scroll;
        }
    }
`;

function FlieUpload(props) {
    const [Images, setImages] = useState([]);

    const dropHandler = (files)=>{
        let formData = new FormData();
        
        const config = {
            header: {'content-type': 'multipart/form-data'} //어떤 파일인지의 타입 정의
        }
        formData.append("file", files[0]);

        axios.post('/product/image', formData, config)
        .then(respense=>{
            if(respense.data.success){
                console.log(respense.data);
                setImages([...Images, respense.data.filePath]);

                //이미지 스테이트가 바뀌는 곳
                props.refreshFunction([...Images, respense.data.filePath]);

            }else{
                alert("파일을 저장하는데 실패했습니다.");
            }
        })
    }

    const deleteHandler = image => {
        const currentIdx = Images.indexOf(image);
        console.log(currentIdx);

        let newImgs = [...Images];
        newImgs.splice(currentIdx, 1); //currentIdx지점에서 시작해서 한 개 제거

        setImages(newImgs);

        //이미지 스테이트가 바뀌는 곳
        props.refreshFunction(newImgs);
    }

    return (
        <FlieUploadBlock>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (                    
                    <FileUploadWrap {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p><MdLibraryAdd /></p>
                    </FileUploadWrap>                    
                )}
            </Dropzone>
            
            <FileConfirm>
                {Images.map((image, index)=>(
                    <div key={index} onClick={()=>deleteHandler(image)}>
                        <img src={`http://localhost:8000/${image}`} alt={index} />
                    </div>
                ))}
            </FileConfirm>
        </FlieUploadBlock>
    );
}

export default FlieUpload
