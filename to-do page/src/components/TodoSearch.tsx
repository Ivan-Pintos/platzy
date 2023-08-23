interface TodoSeacrhProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}
function TodoSeacrh({ setSearchValue, searchValue }: TodoSeacrhProps) {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      placeholder="Ingrese el nombre de tu tarea"
      className="border-2 border-slate-800 rounded py-2 px-2 w-full text-slate-900"
    />
  );
}

export { TodoSeacrh };
