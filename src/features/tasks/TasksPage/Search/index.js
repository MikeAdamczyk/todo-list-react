import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
import { Header, StyledForm, Input } from "./styled";

const Search = ({ title, placeholder }) => {

    const location = useLocation();
    const history = useHistory();

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const onInputChange = ({ target }) => {

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value)
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <section>
            <Header>
                {title}
            </Header>
            <StyledForm>
                <Input
                    placeholder={placeholder}
                    value={query || ""}
                    onChange={onInputChange}
                />
            </StyledForm>
        </section>
    )
};

export default Search;