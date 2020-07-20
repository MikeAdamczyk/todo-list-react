import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (

    <ul className="displayTasks__list">

      {tasks.map(task => (
        
          <li
            key={task.id}
            className={`
            displayTasks__listItem
            ${task.done && hideDone ? "displayTasks__listItem--hidden" : ""}`}
          >
              <button 
                className="displayTasks__toggleDoneButton"
                onClick={() => toggleTaskDone(task.id)}
              >
                {task.done ? "✓" : ""}
              </button>
                    
              <span className={`displayTasks__content ${task.done ? "displayTasks__content--done" : ""}`}>
                {task.content}
              </span>
            
              <button
                className="displayTasks__removeButton"
                onClick={() => removeTask(task.id)}
              >
                X
              </button>

          </li>
      ))}

    </ul>
);

export default Tasks;