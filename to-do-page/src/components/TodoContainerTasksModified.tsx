import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { tasksFormat, displayContainer } from "../../interfaces";
import { useState } from "react";

interface TodoContainerTasksModifiedProps {
  taskSelected: tasksFormat | undefined;
  setTasks: React.Dispatch<React.SetStateAction<tasksFormat[]>>;
  setTaskSelected: React.Dispatch<
    React.SetStateAction<tasksFormat | undefined>
  >;
  setDisplays: React.Dispatch<React.SetStateAction<displayContainer>>;
  displays: displayContainer;
}

function TodoContainerTasksModified({
  taskSelected,
  setTasks,
  setTaskSelected,
  setDisplays,
  displays,
}: TodoContainerTasksModifiedProps) {
  const [hoverTrash, setHovertrash] = useState<boolean>(false);
  const trashClass = "text-red-500 text-2xl inline hover:cursor-pointer";

  const handledelete = () => {
    setTasks((prev) =>
      prev.filter((task) => task.title !== taskSelected?.title)
    );
    setTaskSelected(undefined);
    setDisplays((prev) => {
      for (const key in prev) {
        prev[key] = false;
      }
      return prev;
    });
  };
  return (
    <div
      className={` transition-all time overflow-hidden  duration-500 h-5/6 b gap-5 border rounded m-10 shadow-md shadow-slate-500 flex flex-col p-5 ${
        !displays.containerModified ? "w-0 opacity-0" : "w-1/2 opacity-100"
      } `}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold flex justify-between">
          {taskSelected && taskSelected.title}
          <div>
            {!hoverTrash ? (
              <AiOutlineDelete
                className={trashClass}
                onMouseEnter={() => setHovertrash((prev) => !prev)}
              />
            ) : (
              <AiFillDelete
                className={trashClass}
                onMouseLeave={() => setHovertrash((prev) => !prev)}
                onClick={handledelete}
              />
            )}
          </div>
        </h2>
        <p>{taskSelected && taskSelected.description}</p>
        <hr />
        {/* <h2 className="text-3xl font-semibold">Tags</h2> */}
      </div>
    </div>
  );
}
export { TodoContainerTasksModified };

// TODO Algo que muestre si la tarea esta completeada o no
