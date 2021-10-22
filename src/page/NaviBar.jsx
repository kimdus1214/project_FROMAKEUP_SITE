import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoutBtn from '../components/LogoutBtn';
import { useSelector } from "react-redux";

const NaviBlock = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
`;

const NaviWrap = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`;
const NaviUser = styled.ul`
    display: flex;
`;
const Navi = styled.li`
    font-size: 1.1rem;
    margin-left: 20px;
`;

function NaviBar() {
    const user = useSelector(state => state.user);
    //console.log(user.userData);

    if (user.userData && !user.userData.isAuth) {
        return (
            <NaviBlock>
                <NaviWrap>
                    <NavLink to="/" style={{fontSize: '1.2rem', color: '#000'}}>Home</NavLink>
                    <NaviUser>
                        <Navi>
                            <NavLink to="/login" style={{color: '#000'}}>로그인</NavLink>
                        </Navi>
                        <Navi><NavLink to="/register" style={{color: '#000'}}>회원가입</NavLink></Navi>
                    </NaviUser>
                </NaviWrap>
            </NaviBlock>
        )
    }else{
        return(
            <NaviBlock>
                <NaviWrap>
                    <NavLink to="/" style={{fontSize: '1.2rem'}}>Home</NavLink>
                    <NaviUser>
                        <Navi><NavLink to="/product/upload" style={{color: '#000'}}>상품등록</NavLink></Navi>
                        <Navi><LogoutBtn /></Navi>
                    </NaviUser>
                </NaviWrap>
            </NaviBlock>
        );
    }
}

export default NaviBar;
