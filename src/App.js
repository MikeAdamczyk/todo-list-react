import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import SectionAddTask from "./SectionAddTask";
import SectionDisplayTasks from "./SectionDisplayTasks";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const tasks = [
  {id: 1, content: "Siema", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>

        <Header title="Lista zadań"/>

        <SectionAddTask
            title="Dodaj nowe zadanie"
            body={<Form/>}
        />

        <SectionDisplayTasks
            title="Lista zadań"
            extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
            body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
        />

        <Footer title="© Michał Adamczyk 2020. Wszystkie prawa zastrzeżone!" />

    </Container>
  );
};

export default App;