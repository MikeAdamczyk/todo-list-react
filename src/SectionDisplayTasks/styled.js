import styled from "styled-components";

export const Header = styled.h2`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 20px;
    margin-bottom: 3px;
    display: grid;
    grid-template-columns: 1fr auto;


    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
    }
`;

export const ListBox = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 20px;
`;