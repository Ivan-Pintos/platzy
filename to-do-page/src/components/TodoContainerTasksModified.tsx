import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { tasksFormat } from "../../interfaces";
import { useState } from "react";

interface TodoContainerTasksModifiedProps {
  taskSelected: tasksFormat | undefined;
  setTasks: React.Dispatch<React.SetStateAction<tasksFormat[]>>;
  setTaskSelected: React.Dispatch<
    React.SetStateAction<tasksFormat | undefined>
  >;
}

function TodoContainerTasksModified({
  taskSelected,
  setTasks,
  setTaskSelected,
}: TodoContainerTasksModifiedProps) {
  const [hoverTrash, setHovertrash] = useState<boolean>(false);

  const trashClass = "text-red-500 text-2xl inline hover:cursor-pointer";
  return (
    <div className="w-1/2 p-5 h-5/6 justify-between border rounded m-10 shadow-md shadow-slate-500 flex flex-col">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">
          {taskSelected && taskSelected.title}
        </h2>
        <p>{taskSelected && taskSelected.description}</p>
        <hr />
        <h2 className="text-3xl font-semibold">Tags</h2>
      </div>
      <div className="text-end">
        {!hoverTrash ? (
          <AiOutlineDelete
            className={trashClass}
            onMouseEnter={() => setHovertrash((prev) => !prev)}
          />
        ) : (
          <AiFillDelete
            className={trashClass}
            onMouseLeave={() => setHovertrash((prev) => !prev)}
            onClick={() => {
              // TODO Create handle of this
              setTasks((prev) =>
                prev.filter((task) => task.title !== taskSelected?.title)
              );
              setTaskSelected(undefined);
            }}
          />
        )}
      </div>
    </div>
  );
}
export { TodoContainerTasksModified };

// TODO Algo que muestre si la tarea esta completeada o no
