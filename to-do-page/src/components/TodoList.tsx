import { ReactNode } from "react";

interface TodoListProps {
  children: ReactNode;
}
function TodoList(props: TodoListProps) {
  return (
    <ul className="flex flex-col gap-2 overflow-auto"> {props.children}</ul>
  );
}

export { TodoList };
