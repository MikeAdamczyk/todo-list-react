import React from "react";
import { Header, ListBox } from "./styled";

const SectionDisplayTasks = ({ title, body, extraHeaderContent, param }) => (
    <section>
        <Header>
            <span>{title}</span>
            {extraHeaderContent}
        </Header>

        <ListBox param={param}>
            {body}
        </ListBox>
    </section>
);

export default SectionDisplayTasks;