// CustomDropdown.jsx
import { useState } from "react";

export default function CustomDropdown({ options = [], selected, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-25 text-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-2 text-lg border opacity-75 bg-black/40 border-amber-700 rounded-md"
      >
        {selected}
      </button>
      {open && (
        <ul className="absolute z-40 bottom-[-70%] backdrop-opacity-0 w-[7rem] mt-1 max-h-[8rem] overflow-x-hidden overflow-y-auto bg-black/70 border border-amber-700 rounded-md">
          {options.map((option, i) => (
            <li
              key={i}
              className="p-2 hover:bg-amber-700 cursor-pointer active:bg-amber-700"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
