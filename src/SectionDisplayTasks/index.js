import React from "react";
import { Header, ListBox } from "./styled";

const SectionDisplayTasks = ({ title, body, extraHeaderContent }) => (
    <section>
        <Header>
            <span>{title}</span>
            {extraHeaderContent}
        </Header>

        <ListBox>
            {body}
        </ListBox>
    </section>
);

export default SectionDisplayTasks;