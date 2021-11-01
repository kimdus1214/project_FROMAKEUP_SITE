import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mainImgs = [
    {
        src: "assets/main01.jpg",
        alt: "mainSlide"
    },
    {
        src: "assets/main01.jpg",
        alt: "mainSlide"
    },
    {
        src: "assets/main01.jpg",
        alt: "mainSlide"
    },
    {
        src: "assets/main01.jpg",
        alt: "mainSlide"
    }
]
function ImgSlide() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
      return (
        <div>
          <StyledSlider {...settings}>
            {mainImgs.map((img, index)=>(
                <div key={index}>
                    <img src={img.src} alt={img.alt} />
                </div>
            ))

            }
          </StyledSlider>
        </div>
      );
}

export default ImgSlide;

const StyledSlider = styled(Slider)`
    .slick-dots{
      bottom: 20px;
    }
`;