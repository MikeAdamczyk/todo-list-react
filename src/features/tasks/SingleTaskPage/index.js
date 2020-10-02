import React from "react";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import Container from "../../../common/Container";
import SectionDisplayTasks from "../TasksPage/SectionDisplayTasks";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function SingleTaskPage() {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>

            <Header title="Szczegóły zadania" />

            <SectionDisplayTasks
                title={task ? task.content : "Nie znaleziono zadania 😢"}
                body={!!task && (
                    <>
                        <strong>Ukończono:</strong> {task.done ? "TAK" : "NIE"}
                    </>
                )}
            />

            <Footer title="© Michał Adamczyk 2020. Wszystkie prawa zastrzeżone!" />

        </Container>
    );
};

export default SingleTaskPage;