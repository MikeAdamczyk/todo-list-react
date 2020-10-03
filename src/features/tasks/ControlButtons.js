
import styled, { css } from "styled-components";

export const ControlButton = styled.button`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.teal};
    background: white;
    border: none;
    margin-left: 20px;
    padding: 10px;
    cursor: pointer;

    ${({ exampleTasks }) => exampleTasks && css`
        text-align: right;
    `}

    &:hover {
        font-weight: bold;
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.lightGrey};
    }
`;