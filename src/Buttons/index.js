import React from "react";
import "./style.css"

const Buttons = ({tasks, hideDone}) => (

    tasks.length > 0 && (
        <span className="displayTasks__buttonBox">
            <button
              className="displayTasks__controlButtons"
              disabled={tasks.every(({done}) => !done)}
            >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
              className="displayTasks__controlButtons"
              disabled={tasks.every(({done}) => done)}
            >
            Ukończ wszystkie
            </button>
        </span>
        )
);

export default Buttons;