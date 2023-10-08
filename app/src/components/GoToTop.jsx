import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const GoToTop = () => {
  return (
    <a
      href="#"
      className="inline-flex justify-center gap-2 items-center px-4 py-3 bg-blue-500 rounded-xl fixed bottom-5 right-5 z-10 font-medium hover:bg-blue-400 hover:shadow-xl transition-all active:scale-95 active:bg-blue-300"
    >
      Top <AiOutlineArrowUp />{" "}
    </a>
  );
};

export default GoToTop;
