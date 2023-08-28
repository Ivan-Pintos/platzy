interface TodoTitle {
  tasksCompleted: number;
  totalTasks: number;
}
function TodoTitle({ tasksCompleted, totalTasks }: TodoTitle) {
  return (
    <h1 className="text-4xl py-4 px-2 text-slate-200 text-center font-extralight">
      Tareas completeadas
      <span className="font-semibold"> {tasksCompleted}</span> de
      <span className="font-semibold"> {totalTasks} </span>
    </h1>
  );
}

export { TodoTitle };
