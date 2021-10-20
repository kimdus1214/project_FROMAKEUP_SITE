
import styled from "styled-components";

export const FormBlock = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: ${({ theme }) => theme.bgColor};
`;

export const FormWrap= styled.div`
width: 350px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

h3{
    font-size: 1.5rem;
    margin-top: 35px;
    margin-bottom: 35px;
}
p{
    font-size: 1rem;
}
`;

export const InputBlock = styled.form`
width: 80%;
box-sizing: border-box;
`;