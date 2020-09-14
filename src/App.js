import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import SectionAddTask from "./SectionAddTask";
import SectionDisplayTasks from "./SectionDisplayTasks";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>

      <Container>

        <Header title="Lista zadań" />

        <SectionAddTask
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />

        <SectionDisplayTasks
          title="Lista zadań"
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}

            />
          }
        />

        <Footer title="© Michał Adamczyk 2020. Wszystkie prawa zastrzeżone!" />

      </Container>

    </ThemeProvider>
  );
};

export default App;