import React from "react";
import "./style.css";

const SectionDisplayTasks = ({title, body, extraHeaderContent} ) => (

    <section className="displayTasks">

        <h2 className="displayTasks__header">
            <span>{title}</span>
            {extraHeaderContent}
        </h2>

        <div className="displayTasks__listBox">
            {body}
        </div>

    </section>

);

export default SectionDisplayTasks;