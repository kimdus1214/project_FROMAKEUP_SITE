import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';

function ProductImg(props) {
    const [Images, setImages] = useState([]);

    useEffect(()=>{
        if(props.detail.images && props.detail.images.length > 0){
            let images = [];

            props.detail.images.map(item=>(
                images.push({
                    original: `http://localhost:8000/${item}`,
                    thumbnail: `http://localhost:8000/${item}`
                })
            ))
            setImages(images);
        }
    },[props.detail]);
    // 한번 렌더링 될때 라이프사이클 작동 → 작동시 props.detail.images에 이미지가 없음 → Images: 아무것도 안들어옴
    // 넣어주면 프랍디테일의 값이 바뀔 때마다, 라이프사이클을 한번 더 실행


    return (
        <div>
            <ReactImageGallery items={Images} />
        </div>
    )
}

export default ProductImg
