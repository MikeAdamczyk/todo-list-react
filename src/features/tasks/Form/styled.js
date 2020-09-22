import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    padding: 20px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.concrete};
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.teal};
    border: none;
    color: white;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
        cursor: pointer;
    }

    &:active {
        filter: brightness(120%);
    }

@media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        &:hover {
            transform: scaleY(1.1);
        }
    }
`;