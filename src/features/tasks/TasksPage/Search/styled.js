import styled from "styled-components";

export const Header = styled.h2`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 20px;
    margin-bottom: 3px;
    display: flex;
`;

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 20px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.concrete};
`;