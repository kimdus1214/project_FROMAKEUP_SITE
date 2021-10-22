import React from 'react';
import {Carousel} from 'antd';

function ImgSlider(props) {
    return (
        <div>
            <Carousel autoplay>
                {props.images.map((img, index)=>(
                    <div key={index}>
                        <img style={{width:'100%'}} src={`http://localhost:8000/${img}`} alt={index}/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImgSlider;
