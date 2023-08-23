import { AiOutlineCheck, AiOutlineMore } from "react-icons/ai";
import { tasksFormat } from "../../interfaces";
interface TodoItemProps {
  task: tasksFormat;
  setTasks: React.Dispatch<React.SetStateAction<tasksFormat[]>>;
  setTaskSelected: React.Dispatch<
    React.SetStateAction<tasksFormat | undefined>
  >;
}

function TodoItem({ task, setTasks, setTaskSelected }: TodoItemProps) {
  const iconsClass =
    "hover:cursor-pointer text-xl hover:text-3xl transition-all";
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
        }}
      />
    </li>
  );
}

export { TodoItem };
