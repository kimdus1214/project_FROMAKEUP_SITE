import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterBlock>
            <TopFooter>
                    <li>개인정보처리방침</li>
                    <li>이용약관</li>
                    <li>이메일</li>
                    <li>무단수집거부</li>
                    <li>사업자정보확인</li>
                    <li>공지사항</li>
            </TopFooter>
            <FooterWrap>                
                <BottomFooter>
                    <BotLeft>
                        <li>FROMAKEUP</li>
                        <li>주소 : 부산광역시 00구 00동 ｜ Fax 051-000-0000 | 사업자등록번호 : 000-00-00000  사업자정보확인</li>
                        <li>통신판매업신고: 제0000-서울강남-00000호 | 대표번호 1661-6345 | 팩스번호 02-0000-0000 | 개인정보관리책임자 000 cs@test.co.kr</li>
                        <li>copyright 2021.name.All rights reserved</li>
                    </BotLeft>
                    <BotRight>
                            <h3>CUSTOMER SERVICE</h3>
                            <strong>1234-1234</strong>
                            <span>MON-FRI 10:00 - 17:00</span>
                            <span>( Lunch 12:30 - 13:30 )</span>
                    </BotRight>
                </BottomFooter>
            </FooterWrap>
        </FooterBlock>
    )
}

export default Footer;

const FooterBlock = styled.footer`
    width: 100%;
    background: #000;
    margin-top: 5rem;
`;

const FooterWrap = styled.div`
    width: 75%;
    margin: auto;
    padding-bottom: 2rem;
`;

const TopFooter = styled.ul`
    width: 100%;
    padding-left: 13%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #555;

    @media screen and (max-width: 765px){
        flex-wrap: wrap;
        padding-left: 5%;
    }

    li{
        padding: 10px;
        color: #fff;
        
        &:last-child{
            border-right:0;
        }

        &:after{
            content: "";
            border-right: 1px solid #555;
            margin-left: 15px;
        }

        @media screen and (max-width: 765px){
            padding: 5px;
            font-size: 0.75rem;
            width: 33.3%;
            text-align: center;

            &:after{
                border-right: 0;
            }
        }
    }
`;

const BottomFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    @media screen and (max-width: 1200px){
        flex-direction: column;
        align-items: flex-start;
    }
`;

const BotLeft = styled.ul`
    li{
        color: #ddd;
    }
`;

const BotRight = styled.div`
    color: #ddd;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &:first-child{
        margin-right: 2rem;
    }

    h3{
        font-size: 1rem;
        color: #ddd;
        margin-bottom: 0;
    }
    strong{
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 1200px){
        align-items: flex-start;
    }
    
`;