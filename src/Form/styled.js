import styled from "styled-components";

export const InputForm = styled.form`
    background-color: ${({theme})=> theme.colors.backgroundColor};
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
    border: 2px solid #f2f2f2;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: hsl(180, 100%, 25%);
    border: none;
    color: white;
    transition: 0.5s;

    &:hover {
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.1);
    cursor: pointer;
    }

    &:active {
    background-color: hsl(180, 100%, 45%);
    }

    @media(max-width: 767px) {
        &:hover {
            transform: scaleY(1.1);
        }
    }
`;