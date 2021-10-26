import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        background: ${({ theme }) => theme.bgColor};
        color: ${( { theme } ) => theme.color};
        border-color: ${( { theme } ) => theme.borderColor};
    }
`;

