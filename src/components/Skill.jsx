import React from 'react';

const Skill = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center">
      <svg className="w-14 h-14 lg:w-20 lg:h-20 fill-current" viewBox="0 0 24 24">
        {children}
      </svg>
      <span className="text-center text-xl">{title}</span>
    </div>
  );
};

export default Skill;
