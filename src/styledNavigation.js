import styled from "styled-components";

export const StyledNavigation = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 10px;
    margin: 0;
    background: ${({ theme }) => theme.colors.teal};
    text-decoration :none;
    color: white;
`;

export const StyledItem = styled.li`
    color: white;
    margin: 15px;
    text-decoration: none;
`;