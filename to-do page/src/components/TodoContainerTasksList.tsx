import { TodoCreateButton } from "./TodoCreateButton.tsx";
import { tasksFormat } from "../../interfaces.ts";
import { TodoSeacrh } from "./TodoSearch.tsx";
import { TodoTitle } from "./TodoTitle.tsx";
import { TodoItem } from "./TodoItem.tsx";
import { TodoList } from "./TodoList.tsx";
import { useState } from "react";

interface TodoContainerTasksListProps {
  tasks: tasksFormat[];
  setTasks: React.Dispatch<React.SetStateAction<tasksFormat[]>>;
  setTaskSelected: React.Dispatch<
    React.SetStateAction<tasksFormat | undefined>
  >;
}
function TodoContainerTasksList({
  tasks,
  setTasks,
  setTaskSelected,
}: TodoContainerTasksListProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleTasksCompleted = tasks.filter((task) => task.completed).length;

  const handleIncludeText = (taskTitle: string): boolean => {
    const normalizeText = (text: string): string => {
      return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    };
    const normalizedSearchValue = normalizeText(searchValue);
    const normalizedTaskTitle = normalizeText(taskTitle);
    return normalizedTaskTitle.includes(normalizedSearchValue);
  };

  return (
    <div className="w-1/2  h-5/6 border rounded m-10 shadow-md shadow-slate-500 flex flex-col justify-between">
      <div className="p-5 flex flex-col gap-2 ">
        <TodoTitle
          tasksCompleted={handleTasksCompleted}
          totalTasks={tasks.length}
        />
        <TodoSeacrh setSearchValue={setSearchValue} searchValue={searchValue} />
        <TodoList>
          {tasks.map(
            (task) =>
              handleIncludeText(task.title) && (
                <TodoItem
                  task={task}
                  setTasks={setTasks}
                  setTaskSelected={setTaskSelected}
                  key={task.title}
                />
              )
          )}
        </TodoList>
      </div>

      <TodoCreateButton />
    </div>
  );
}
export { TodoContainerTasksList };
