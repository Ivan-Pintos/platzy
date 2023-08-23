import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
function TodoCreateButton() {
  const [hoverButton, setHoverButton] = useState<boolean>();

  return (
    <button
      className="bg-slate-200 flex justify-center py-2 hover:bg-slate-300"
      onMouseEnter={() => setHoverButton(true)}
      onMouseLeave={() => setHoverButton(false)}
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
