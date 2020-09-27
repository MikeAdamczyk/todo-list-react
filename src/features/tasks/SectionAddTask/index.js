import React from "react";
import { ControlButton } from "../ControlButtons";
import { Header, ButtonBox } from "./styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";

const SectionAddTask = ({ title, body }) => {

    const dispatch = useDispatch();

    return (
        <section>
            <>
                <Header>
                    {title}
                    <ButtonBox>
                        <ControlButton exampleTasks onClick={() => dispatch(fetchExampleTasks())}>
                            Pobierz przykładowe zadania
                        </ControlButton>
                    </ButtonBox>
                </Header>
            </>

            {body}
        </section>
    )
};

export default SectionAddTask;