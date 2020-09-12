import React from "react";
import { ButtonBox, ControlButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

  tasks.length > 0 && (
    <ButtonBox>
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
    </ButtonBox>
  )
);

export default Buttons;