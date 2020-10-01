import React from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import SectionAddTask from "./SectionAddTask";
import SectionDisplayTasks from "./SectionDisplayTasks";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import Container from "../../../common/Container";

function TasksPage() {

  return (
    <Container>

      <Header title="Lista zadań" />

      <SectionAddTask
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <SectionDisplayTasks
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TasksList />}
      />

      <Footer title="© Michał Adamczyk 2020. Wszystkie prawa zastrzeżone!" />

    </Container>
  );
};

export default TasksPage;