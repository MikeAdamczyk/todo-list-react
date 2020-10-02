import React from "react";
import { ControlButton } from "../../ControlButtons";
import { Header, ButtonBox } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const SectionAddTask = ({ title, body }) => {

    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <section>
            <>
                <Header>
                    {title}
                    <ButtonBox>
                        <ControlButton disabled={loading} exampleTasks onClick={() => dispatch(fetchExampleTasks())}>
                            {loading ? "Loading..." : "Pobierz przykładowe zadania"}
                        </ControlButton>
                    </ButtonBox>
                </Header>
            </>

            {body}
        </section>
    )
};

export default SectionAddTask;