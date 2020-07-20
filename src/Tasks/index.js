import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (

    <ul className="displayTasks__list">

      {tasks.map(task => (
        
          <li
          key={task.id}
          className={`
          displayTasks__listItem
          ${task.done && hideDoneTasks ? "displayTasks__listItem--hidden" : ""}`}
          >
          
            <button className="displayTasks__toggleDoneButton">
              {task.done ? "✓" : ""}
            </button>
                  
            <span className={`displayTasks__content ${task.done ? "displayTasks__content--done" : ""}`}>
              {task.content}
            </span>
          
            <button className="displayTasks__removeButton">
              X
            </button>

          </li>
      ))}

    </ul>
);

export default Tasks;