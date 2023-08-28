import { displayContainer } from "../../interfaces";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

interface TodoCreateButtonProps {
  setDisplays: React.Dispatch<React.SetStateAction<displayContainer>>;
}
function TodoCreateButton({ setDisplays }: TodoCreateButtonProps) {
  const [hoverButton, setHoverButton] = useState<boolean>();
  const handleOpenContainer = () => {
    setDisplays((prev) => {
      const newObject = { ...prev };
      for (const key in newObject) {
        key === "containerCreate"
          ? (newObject[key] = true)
          : (newObject[key] = false);
      }

      return newObject;
    });
  };

  return (
    <button
      className="bg-slate-200 flex justify-center py-2 hover:bg-slate-300"
      onMouseEnter={() => setHoverButton(true)}
      onMouseLeave={() => setHoverButton(false)}
      onClick={() => handleOpenContainer()}
    >
      <AiOutlinePlus
        className={`text-2xl text-slate-950 ${
          hoverButton && "animate-rotateIcon"
        }`}
      />
    </button>
  );
}
export { TodoCreateButton };
