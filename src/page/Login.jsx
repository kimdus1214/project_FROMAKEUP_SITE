import React,{useState} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { InputBtn } from '../stlye/InputBtn';
import { InputWrap } from '../stlye/InputWrap';
import {FormBlock, FormWrap, InputBlock} from '../stlye/FormPage';
import { useDispatch } from 'react-redux';
import {loginUser} from '../_actions/user_actions';

function Login({history}) {
    const dispatch = useDispatch();
    const [inputs, setInput] = useState({
        userId: "",
        userPw: "",
    });
    const { userId, userPw } = inputs;

    const onChange = (e) => {
      const { value, name } = e.target;
      setInput({
        ...inputs,
        [name]: value,
      });
    };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      id: userId,
      password: userPw,
    };
    if (!userId || !userPw) {
      alert("필수 항목을 작성하세요!");
    } else {
      dispatch(loginUser(body))
        .then((response) => {
          if (response.payload.loginSuccess) {
            window.localStorage.setItem('userId', response.payload.userId);
            history.push("/");
          } else {
            alert(response.payload.message);
          }
        })
    }
  };

    return (
        <FormBlock>
            <FormWrap>
                <h3>로그인</h3>
                <InputBlock onSubmit={onSubmit}>
                    <InputWrap type="text" name="userId" onChange={onChange} value={userId} placeholder="아이디"/>
                    <InputWrap type="password" name="userPw" onChange={onChange} value={userPw} placeholder="비밀번호"/>
                    <InputBtn type="submit">로그인</InputBtn>
                </InputBlock>
                <p>이용이 처음이신가요? <NavLink to="/register" style={{color:`${({ theme }) => theme.borderColor}`, fontSize:"1rem", fontWeight:"500"}}>회원가입</NavLink></p>
            </FormWrap>
        </FormBlock>
    )
}

export default withRouter(Login);