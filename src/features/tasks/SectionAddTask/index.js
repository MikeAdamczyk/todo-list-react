import React from "react";
import { ControlButton } from "../ControlButtons";
import { Header } from "./styled";

const SectionAddTask = ({ title, body }) => (
    <section>
        <>
            <Header>
                {title}
                <ControlButton exampleTasks>
                    Pobierz przykładowe zadania
                </ControlButton>
            </Header>
        </>

        {body}
    </section>
);

export default SectionAddTask;