// import { AiOutlinePlus } from "react-icons/ai";
import { tasksFormat } from "../../interfaces";
import { useState } from "react";

interface TodoContainerTasksCreateProps {
  setTasks: React.Dispatch<React.SetStateAction<tasksFormat[]>>;
}
interface FormState {
  title: string;
  description: string;
}
function TodoContainerTasksCreate({ setTasks }: TodoContainerTasksCreateProps) {
  const [formValues, setFormValues] = useState<FormState>({
    title: "",
    description: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { description, title } = formValues;
    event.preventDefault();
    setTasks((prev) => [
      ...prev,
      {
        title,
        description,
        completed: false,
      },
    ]);
    setFormValues({ title: "", description: "" });
  };

  return (
    <form
      className="w-1/2  h-5/6 b gap-5 border rounded m-10 shadow-md shadow-slate-500 flex flex-col p-5"
      onSubmit={handleSubmit}
      method="post"
    >
      <h2 className="text-2xl font-semibold">Titulo de la tarea</h2>
      <input
        type="text"
        name="title"
        value={formValues.title}
        placeholder="Nombre de la tarea"
        className="border-2 border-slate-800 rounded py-2 px-2 w-full text-slate-900"
        onChange={handleChange}
      />
      <h2>Description task</h2>
      <textarea
        name="description"
        value={formValues.description}
        cols={30}
        rows={10}
        onChange={handleChange}
        placeholder="Descripción..."
        className="border-2 border-slate-800 rounded py-2 px-2 w-full text-slate-900"
      ></textarea>
      {/* <div className="flex justify-between items-center">
        <h2 className="text-xl">Tags</h2>{" "}
        <AiOutlinePlus className="text-xl hover:text-2xl transition-all hover:cursor-pointer" />
      </div> */}
      <button className="bg-slate-200 flex justify-center py-2 hover:bg-slate-300 text-slate-900 font-semibold">
        Crear
      </button>
    </form>
  );
}
export { TodoContainerTasksCreate };
