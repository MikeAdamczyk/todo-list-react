import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    background-color: white;
    padding: 0px;
    margin: 0px;
    display: grid;
    list-style: none;
`;

export const Item = styled.li`
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.concrete};
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ done }) => done && css`
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.lightGrey};
    `}
`;

export const Button = styled.button`
    text-decoration: none;
    min-width: 40px;
    min-height: 40px;
    padding: 10px;
    color: white;
    border: none;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 100%, 25%);

        &:hover{
            background-color: hsl(120, 100%, 35%);
            cursor: pointer;
        }

        &:active{
            background-color: hsl(120, 100%, 45%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(0, 100%, 40%);

        &:hover{
            background-color: hsl(0, 100%, 50%);
            cursor: pointer;
        }

        &:active{
            background-color: hsl(0, 100%, 70%);
        }
    `}
`;

export const StyledNavLink = styled(Link)`

    text-decoration: none;
    color: ${({ theme }) => theme.colors.teal};
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    ${({ done }) => done && css`
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.lightGrey};
    `}
`;