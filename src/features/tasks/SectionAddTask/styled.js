import styled from "styled-components";

export const Header = styled.h2`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 20px;
    margin-bottom: 3px;
    display: flex;
`;

export const ButtonBox = styled.span`
    flex-grow: 1;
    text-align: right;
`;