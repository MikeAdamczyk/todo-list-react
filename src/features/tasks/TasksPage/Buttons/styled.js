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