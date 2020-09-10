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
    border-bottom: 2px solid #f2f2f2;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
    hyphens: auto;
    text-align: justify;

    ${({ done }) => done && css`
        text-decoration: line-through;
        color: #ccc;
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