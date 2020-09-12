import styled from "styled-components";

export const ButtonBox = styled.span`
    display: flex;
    align-content: center;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
`;

export const ControlButton = styled.button`
    font-size: 15px;
    color: hsl(180, 100%, 25%);
    background: none;
    border: none;
    margin-left: 20px;
    transition: 0.5s;
    padding: 10px;

    &:hover {
        cursor: pointer;
        color: hsl(180, 100%, 35%);
    }

    &:active {
        cursor: pointer;
        color: hsl(180, 100%, 45%);
    }

    &:disabled {
        cursor: pointer;
        color: #ccc;
    }
`;