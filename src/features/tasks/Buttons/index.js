import React from "react";
import { Wrapper, ControlButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

  tasks.length > 0 && (
    <Wrapper>
      <ControlButton
        onClick={toggleHideDone}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </ControlButton>

      <ControlButton
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </ControlButton>
    </Wrapper>
  )
);

export default Buttons;