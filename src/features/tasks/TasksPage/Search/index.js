import React from "react";
import { Header, StyledForm, Input } from "./styled";

const Search = ({ title, body }) => (
    <section>
        <Header>
            {title}
        </Header>
        <StyledForm>
            <Input
                type="text"
                placeholder="Wyszukaj zadanie"
            />
        </StyledForm>
    </section>
);

export default Search;