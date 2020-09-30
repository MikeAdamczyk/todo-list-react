import React from "react";
import { Wrapper } from "./styled";
import { ControlButton } from "../ControlButtons";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";

const Buttons = () => {

  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const everyTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
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