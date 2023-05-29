import React from "react";

const Skill = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        className="w-12 h-12 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 fill-current"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
      <span className="text-center text-lg 2xl:text-2xl">{title}</span>
    </div>
  );
};

export default Skill;
