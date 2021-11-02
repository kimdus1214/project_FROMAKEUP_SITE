import React from 'react';
import { Carousel } from 'antd';

const mainImgs = [
    {
        src: "assets/main01.jpg",
        alt: "mainSlide"
    },
    {
        src: "assets/main02.jpg",
        alt: "mainSlide"
    },
    {
        src: "assets/main03.jpg",
        alt: "mainSlide"
    },
    {
        src: "assets/main04.jpg",
        alt: "mainSlide"
    }
]

function ImgSlide() {
      return (
        <Carousel effect="fade">
        {mainImgs.map((img, index)=>(
                <div key={index}>
                    <img src={img.src} alt={img.alt} />
                </div>
        ))
        }
      </Carousel>
      );
}

export default ImgSlide;

