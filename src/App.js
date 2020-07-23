import React, {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import SectionAddTask from "./SectionAddTask";
import SectionDisplayTasks from "./SectionDisplayTasks";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

function App() {

  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    {id: 1, content: "kupić wodę", done: true},
    {id: 2, content: "posprzątać biuro", done: false},
    {id: 3, content: "pobiegać min. 30 min wieczorem", done: false},
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {

      if(task.id === id){
        return {
          ...task,
          done: !task.done
        };
      };

      return task;
    }));
  };

  const setAllDone = () => {
      setTasks(tasks => tasks.map(task => ({
        ...task,
        done: true,
      })))
  };

  const addNewTask = (content) => {
    setTasks( tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length-1].id + 1 : 1,
      },
    ]);
  };

  return (
    <Container>

        <Header title="Lista zadań"/>

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
  );
};

export default App;