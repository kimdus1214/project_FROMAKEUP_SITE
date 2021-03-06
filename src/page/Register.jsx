import React,{useState} from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';
import { InputBtn } from '../stlye/InputBtn';
import { InputWrap } from '../stlye/InputWrap';
import {FormBlock, FormWrap, InputBlock} from '../stlye/FormPage';
import { useDispatch } from "react-redux";
import { registerUser } from "../_actions/user_actions";
import axios from 'axios';

const InputBlockId = styled(InputBlock)`
    position: relative;
    margin-bottom: 5px;
`;
const RegisterInput = styled(InputWrap)`
    border-radius: 5px;

    &+&{
        margin-top: 5px;
    }
    &:first-child{
        border-radius: 5px;
    }
    &:nth-child(2){
        border-radius: 5px;
    }
`;

const IdcheckBtn = styled.button`
    width: 80px;
    height: 45px;
    position: absolute;
    right:0;
`;

const LimitOnLength = styled.p`
    font-size: 12px;
    color: #c62917;
    margin: 5px 0;
`;

function Register({history}) {
    const dispatch = useDispatch();
  const [inputs, setInput] = useState({
    userId: "",
    userPw: "",
    userNickname: "",
    usableId: false,
  });

  const { userId, userPw, userNickname, usableId } = inputs;
  const [overIdLength, setOverIdLength] = useState(false);
  const [overPwLength, setOverPwLength] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
      usableId: usableId,
    });

    if (inputs.userId.length > 8) {
      setOverIdLength(true);
    } else {
      setOverIdLength(false);
    }

    if (inputs.userPw.length > 12) {
      setOverPwLength(true);
    } else {
      setOverPwLength(false);
    }
  };

  const checkId = (e) => {
    e.preventDefault();
    if (overIdLength) {
      return;
    }
    axios
      .post(`/register/checkId/${userId}`, { id: userId })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setInput({
            ...inputs,
            usableId: true,
          });
          alert("??????????????? ??????????????????.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("?????? ???????????? ??????????????????");
      });
  };

  const SignUp = (e) => {
    e.preventDefault();
    let body = {
      id: userId,
      password: userPw,
      nickname: userNickname,
    };
    if (overIdLength || overPwLength) {
      return;
    } else if (!userId || !userPw || !userNickname) {
      alert("?????? ????????? ??????????????????");
      return;
    } else if (usableId === false) {
      alert("????????? ??????????????? ????????????");
      return;
    } else {
      dispatch(registerUser(body))
      .then((response) => {
        if (response.payload.success) {
          alert("??????????????? ??????????????????.");
          history.push("/login");
        } else {
          alert("??????????????? ??????????????????.");
        }
      })
      .catch((error) => console.log(error));
    }
  };
    return (
        <FormBlock>
            <FormWrap>
                <h3>????????????</h3>
                <InputBlockId onSubmit={checkId}>
                    <RegisterInput name="userId" type="text" placeholder="?????????" onChange={onChange} value={userId}/>
                    {overIdLength && (
                    <LimitOnLength>???????????? 8??? ????????? ??????????????????</LimitOnLength>
                    )}
                    <IdcheckBtn onClick={checkId}>????????????</IdcheckBtn>
                </InputBlockId>
                <InputBlock onSubmit={SignUp}>
                    <RegisterInput name="userPw" type="password" placeholder="????????????" onChange={onChange} value={userPw}/>
                    {overPwLength && (
                    <LimitOnLength>??????????????? 12??? ????????? ??????????????????</LimitOnLength>
                    )}
                    <RegisterInput name="userNickname" type="text" placeholder="?????????" onChange={onChange} value={userNickname}/>
                    {/* <RegisterInput placeholder="???????????? ??????" /> */}
                    <InputBtn type="submit">????????????</InputBtn>
                </InputBlock>
                <p><NavLink to="/login" style={{color:`${({ theme }) => theme.borderColor}`, fontSize:"1rem", fontWeight:"500"}}>?????????</NavLink> ????????????</p>
            </FormWrap>
        </FormBlock>
    )
}

export default withRouter(Register);
