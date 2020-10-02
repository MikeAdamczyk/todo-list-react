import React from "react";
import { useQueryParameters, useReplaceQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Header, StyledForm, Input } from "./styled";

const Search = ({ title, placeholder }) => {

    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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