import styled from "styled-components";

export const Wrapper = styled.span`
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
    color: ${({ theme }) => theme.colors.teal};
    background: none;
    border: none;
    margin-left: 20px;
    transition: 0.5s;
    padding: 10px;

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