import styled from "styled-components";

export const InputBtn = styled.button`
    width: 100%;
    height: 45px;
    line-height: 45px;
    margin-top: 35px;
    margin-bottom: 35px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
    background: ${({ theme }) => theme.color};
`;