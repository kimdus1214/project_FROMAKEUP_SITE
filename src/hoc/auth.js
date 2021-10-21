import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../_actions/user_actions";

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (SpecificComponent, option, adminRoute = null) {
  // option?
  // null => 아무나 출입 가능
  // true => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 불가능

  function AuthCheck(props) {
    let user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
          //console.log(response);
          if(!response.payload.isAuth){ //로그인 안한 상태
              if(option){
                props.history.push("/");
              }
          }else{ //로그인한 상태
              if(adminRoute && !response.payload.isAdmin){
                  props.history.push('/');
              }else{
                if(option === false){
                    props.history.push("/");
                }
              }
          }
      });
    }, [dispatch, props.history]);

    return <SpecificComponent {...props} user={user}/>;
  }

  return AuthCheck;
}
