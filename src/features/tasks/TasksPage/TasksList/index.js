import React from "react";
import { List, Item, Content, Button, StyledNavLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();


  return (
    <List>
      {tasks.map(task => (

        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </Button>

          <Content done={task.done ? 1 : 0}>
            <StyledNavLink done={task.done ? 1 : 0} to={`/zadania/${task.id}`}>{task.content}</StyledNavLink>
          </Content>

          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            X
        </Button>

        </Item>
      ))}
    </List>
  )
};

export default TasksList;