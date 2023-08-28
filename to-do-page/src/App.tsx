import { TodoContainerTasksList } from "./components/TodoContainerTasksList.tsx";
import { TodoContainerTasksModified } from "./components/TodoContainerTasksModified.tsx";
import { TodoContainerTasksCreate } from "./components/TodoContainerTasksCreate.tsx";
import { tasksFormat, displayContainer } from "../interfaces.ts";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<tasksFormat[]>([
    {
      title: "Terminar el curso de platzy react",
      description: "something",
      completed: false,
    },
    {
      title: "Terminar la mini web de TO-DO",
      description: "something",
      completed: true,
    },
    {
      title: "Hacer ejercicio hoy",
      description: "something",
      completed: false,
    },
  ]);
  const [taskSelected, setTaskSelected] = useState<tasksFormat | undefined>();
  const [displays, setDisplays] = useState<displayContainer>({
    containerCreate: false,
    containerModified: false,
  });
  return (
    <div className="flex text-slate-200 h-screen items-center justify-center">
      <TodoContainerTasksCreate
        setTasks={setTasks}
        setDisplays={setDisplays}
        displays={displays}
      />
      <TodoContainerTasksList
        tasks={tasks}
        setTasks={setTasks}
        setTaskSelected={setTaskSelected}
        setDisplays={setDisplays}
      />
      <TodoContainerTasksModified
        taskSelected={taskSelected}
        setTasks={setTasks}
        setTaskSelected={setTaskSelected}
        setDisplays={setDisplays}
        displays={displays}
      />
    </div>
  );
}

export default App;
//TODO : Create a cross to close the secondary containers
//TODO : Create one global function to alter the displays of the containers
//TODO : Add search magnifying glass button to the principal text input to search tasks
