import { TodoContainerTasksList } from "./components/TodoContainerTasksList.tsx";
import { TodoContainerTasksModified } from "./components/TodoContainerTasksModified.tsx";
import { TodoContainerTasksCreate } from "./components/TodoContainerTasksCreate.tsx";
import { tasksFormat } from "../interfaces.ts";
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

  return (
    <div className="flex text-slate-200 h-screen items-center justify-center">
      <TodoContainerTasksCreate setTasks={setTasks} />
      <TodoContainerTasksList
        tasks={tasks}
        setTasks={setTasks}
        setTaskSelected={setTaskSelected}
      />
      <TodoContainerTasksModified
        taskSelected={taskSelected}
        setTasks={setTasks}
        setTaskSelected={setTaskSelected}
      />
    </div>
  );
}

export default App;
