import React from "react";
import styled from 'styled-components'
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../_actions/user_actions";

const Logout = styled.a`
  cursor: pointer;
  color: #000;
`;

function LogoutBtn(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.logoutSuccess) {
        window.localStorage.removeItem("userId");
        props.history.push("/");
      } else {
        alert("로그아웃에 실패했습니다");
      }
    });
  };

  return (
    <>
      <Logout onClick={handleLogout}>로그아웃</Logout>
    </>
  );
}

export default withRouter(LogoutBtn);