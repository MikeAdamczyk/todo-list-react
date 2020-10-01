import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.colors.concrete};
        margin: 0px auto 20px;
        line-height: 1.4;
        color: rgb(49, 49, 49);
    }
`;