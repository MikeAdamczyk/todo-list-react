import React from "react";
import { Header } from "./styled";

const SectionAddTask = ({ title, body }) => (
    <section>
        <Header>{title}</Header>
        {body}
    </section>
);

export default SectionAddTask;