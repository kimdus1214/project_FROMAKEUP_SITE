import styled from "styled-components";

export const InputWrap = styled.input`
width: 100%;
height: 45px;
ouline: none;
border: none;
font-size: 1rem;
padding: 5px 10px;
box-sizing: border-box;
&+&{
    margin-top: -1px;
}
&:first-child{
    border-radius: 5px 5px 0px 0px;
}
&:nth-child(2){
    border-radius: 0px 0px 5px 5px;
}
border: 1px solid ${({ theme }) => theme.borderColor};
color: ${({ theme }) => theme.color}; 
`;

