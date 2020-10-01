import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: white;
    padding: 5px;

    &.${activeClassName} {
        font-weight: bold;
    }

    &:hover {
        border-bottom: solid 2px white;
    }
`;