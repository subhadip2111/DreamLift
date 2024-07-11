import React from 'react';

const FilterButton = ({ onClicked }) => {
  return (
    <div className="ml-4">
      <button type='button'
        htmlFor="nav_bar_icon"
        className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
        onClick={onClicked}
      >
        <input id="nav_bar_icon" type="checkbox" className="hidden peer" />
        <div
          className="w-2/4 h-1.5 bg-yellow-300 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
        ></div>
        <div
          className="w-full h-1.5 bg-yellow-300 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"
        ></div>
        <div
          className="w-2/3 h-1.5 bg-yellow-300 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
        ></div>
      </button>
    </div>
  );
};  

export default FilterButton;
