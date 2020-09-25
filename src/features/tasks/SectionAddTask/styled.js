import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`;

export const Header = styled.h2`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 20px;
    margin-bottom: 3px;
    display: flex;
`;