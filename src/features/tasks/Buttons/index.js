import React from "react";
import { Wrapper } from "./styled";
import { ControlButton } from "../ControlButtons";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {

  const { tasks, hideDone } = useSelector(selectTasks);
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
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </ControlButton>
      </Wrapper>
    )
  )
};

export default Buttons;