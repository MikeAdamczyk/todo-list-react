import React from "react";
import "./style.css";

const SectionAddTask = ({title, body}) => (

    <section className="addTask">
        <h2 className="addTask__header">{title}</h2>
        {body}
    </section>
);

export default SectionAddTask;








