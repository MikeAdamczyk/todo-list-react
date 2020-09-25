
import styled, { css } from "styled-components";

export const ControlButton = styled.button`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.teal};
    background: white;
    border: none;
    margin-left: 20px;
    transition: 0.5s;
    padding: 10px;

    ${({ exampleTasks }) => exampleTasks && css`
        flex-grow: 1;
        text-align: right;
    `}

    &:hover {
        cursor: pointer;
        filter: brightness(110%);
    }

    &:active {
        cursor: pointer;
        filter: brightness(120%);
    }

    &:disabled {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.lightGrey};
    }
`;