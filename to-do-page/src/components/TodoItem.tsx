import { AiOutlineCheck, AiOutlineMore } from "react-icons/ai";
import { tasksFormat, displayContainer } from "../../interfaces";
interface TodoItemProps {
  task: tasksFormat;
  setTasks: React.Dispatch<React.SetStateAction<tasksFormat[]>>;
  setDisplays: React.Dispatch<React.SetStateAction<displayContainer>>;
  setTaskSelected: React.Dispatch<
    React.SetStateAction<tasksFormat | undefined>
  >;
}

function TodoItem({
  task,
  setTasks,
  setTaskSelected,
  setDisplays,
}: TodoItemProps) {
  const iconsClass =
    "hover:cursor-pointer text-xl hover:text-3xl transition-all";
  const handleOpenContainer = () => {
    setDisplays((prev) => {
      const newObject = { ...prev };
      for (const key in newObject) {
        key === "containerModified"
          ? (newObject[key] = true)
          : (newObject[key] = false);
      }

      return newObject;
    });
  };
  return (
    <li className=" border rounded p-2 flex justify-between items-center">
      <AiOutlineCheck
        className={`${iconsClass} ${
          task.completed && "text-green-500"
        } hover:text-green-500 `}
        onClick={() =>
          setTasks((prev) =>
            prev.map((stateTask) =>
              stateTask.title === task.title
                ? {
                    title: task.title,
                    completed: !task.completed,
                    description: task.description,
                  }
                : stateTask
            )
          )
        }
      />
      <span className={` ${task.completed && "line-through"}`}>
        {task.title}
      </span>
      <AiOutlineMore
        className={`${iconsClass} hover:text-white`}
        onClick={() => {
          setTaskSelected(task);
          handleOpenContainer();
        }}
      />
    </li>
  );
}

export { TodoItem };
