
import styled, { css } from "styled-components";

export const ControlButton = styled.button`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.teal};
    background: white;
    border: none;
    margin-left: 20px;
    transition: 0.5s;
    padding: 10px;
    cursor: pointer;

    ${({ exampleTasks }) => exampleTasks && css`
        text-align: right;
    `}

    &:hover {
        filter: brightness(110%);
        text-decoration: underline;
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.lightGrey};
    }
`;