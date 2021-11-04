import React from 'react';
import styled from 'styled-components';
import jquery from 'jquery';
import $ from 'jquery';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";


const smallContents = [
    {
        title: "티 파티 블러셔",
        content: "무드에 따라 골라쓰는 3색 블러셔",
        img : "assets/mainSection1_01.jpg"
    },
    {
        title: "바이로댕 콜렉터즈",
        content: "자연스러운 음영감 데일리 아이팔레트",
        img : "assets/mainSection1_02.jpg"
    },
    {
        title: "에그 레미디 헤어팩",
        content: "편리한 데일리 퀵 리페어 테라피",
        img : "assets/mainSection1_03.jpg"
    }
]

const bigContents=[
    {
        img : "assets/mainSection2_01.jpg"
    },
    {
        img : "assets/mainSection2_02.jpg"
    },
    {
        img : "assets/mainSection2_03.jpg"
    }
]

function MainBanner() {
    $(document).ready(function(){
        let LeftBn = $('.LeftBn').width();
        let RightBn = $('.RightBn').width();
        console.log(RightBn)
        $('.arrow_left').click(function(){
            $('.SmallBannerMask').stop().animate({
                left: 0
            },300, function(){
                $('.SmallBannerMask').css('left',-LeftBn).find('.SmallBannerWrap:last').prependTo('.SmallBannerMask');
            });

            $('.BigBannerWrap').delay(450).stop().animate({
                left: 0
            },300, function(){
                $('.BigBannerWrap').css('left',-RightBn).find('img:last').prependTo('.BigBannerWrap');
            })
        })

        $('.arrow_right').click(function(){
            $('.SmallBannerMask').stop().animate({
                left: -LeftBn     
            },300,function(){
                $('.SmallBannerMask').css('left','0').find('.SmallBannerWrap:first').appendTo('.SmallBannerMask');
            });
            $('.BigBannerWrap').delay(450).stop().animate({
                left: -RightBn
            },300,function(){
                $('.BigBannerWrap').css('left','0').find('img:first').appendTo('.BigBannerWrap');
            })
        })

    });

    return (
        <MainBannerBlock>
            <LeftBanner className="LeftBn">
                <SmallBannerMask className="SmallBannerMask">
                    {smallContents.map((content, index)=>(
                        <SmallBannerWrap className="SmallBannerWrap" key={index}>
                            <SmallTextWrap>
                                <h1>MD PICK</h1>
                                <h3>{content.title}</h3>
                                <p>{content.content}</p>
                            </SmallTextWrap>
                            <SmallBannerImg>
                                <img src={content.img} alt="mainBanner" />
                            </SmallBannerImg>
                        </SmallBannerWrap>
                    ))}
                </SmallBannerMask>
                <ArrowWrap>
                    <li className="arrow_left"><MdKeyboardArrowLeft /></li>
                    <li className="arrow_right"><MdKeyboardArrowRight /></li>
                </ArrowWrap>
            </LeftBanner>
            <RightBanner className="RightBn">
                <BigBannerWrap className="BigBannerWrap">
                {bigContents.map((content,index)=>(
                    <img src={content.img} alt="mainBanner" key={index} />
                ))}
                </BigBannerWrap>
            </RightBanner>
        </MainBannerBlock>
    )
}

export default MainBanner;

const MainBannerBlock = styled.section`
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

const LeftBanner = styled.div`
    max-width: 450px;
    width: 80.43%;
    height: 572px;
    position: relative;
    display: flex;
    overflow: hidden;
`;

const RightBanner = styled.div`
    max-width: 450px;
    width: 80.43%;
    height: 572px;
    position: relative;
    display: flex;
    overflow: hidden;
`;

const SmallBannerMask = styled.div`
    width: Calc(100% * 3);
    height: 100%;
    position: absolute;
    left: 0;
    display: flex;
`;

const SmallBannerWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
`;

const SmallBannerImg = styled.div``;

const SmallTextWrap = styled.div`
    h1{
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom:0;
    }
    h3{
        font-size: 1.5rem;
        margin-bottom:0;
        font-weight: 500;
    }
    p{
        margin-bottom:0;
        font-size: 1rem;
    }
`;

const BigBannerWrap = styled.div`
    width: Calc(150px*3);
    height: 100%;
    position: absolute;
    left:0;
    display: flex;
`;

const ArrowWrap = styled.ul`
    width: 50%;
    height: 50px;
    position: absolute;
    top: 9rem;
    display: flex;

    li{
        cursor: pointer;
        margin-right: 1rem;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 1px solid #ddd;
        text-align: center;

        svg{
            font-size: 2.2rem;
            color: #ddd;
            margin-top: 0.4rem;
        }
    }
`;