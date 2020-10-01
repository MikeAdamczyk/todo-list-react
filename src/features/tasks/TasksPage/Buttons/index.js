import React from "react";
import { Wrapper } from "./styled";
import { ControlButton } from "../../ControlButtons";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIsEveryTaskDone,
  selectIsTaskListEmpty
} from "../../tasksSlice";

const Buttons = () => {

  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const everyTaskDone = useSelector(selectIsEveryTaskDone);
  const isTaskListEmpty = useSelector(selectIsTaskListEmpty);
  const dispatch = useDispatch();

  return (
    !isTaskListEmpty > 0 && (
      <Wrapper>
        <ControlButton
          onClick={() => dispatch(toggleHideDone())}
          disabled={tasks.every(({ done }) => !done)}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </ControlButton>

        <ControlButton
          onClick={() => dispatch(setAllDone())}
          disabled={everyTaskDone}
        >
          Ukończ wszystkie
        </ControlButton>
      </Wrapper>
    )
  )
};

export default Buttons;