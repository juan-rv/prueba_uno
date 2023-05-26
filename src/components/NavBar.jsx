import React, { useState } from "react";
import { AiFillBell, AiFillSetting } from "react-icons/ai";

const NavBar = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const containColor = selected
    ? " bg-gradient-to-t from-[#231f20] to-[#222222] text-[#C89B3C] "
    : "";

  const textColor = selected ? "text-[#C89B3C]" : "text-[#F0E6D2]";

  return (
    <div className="bg-[#0E0F0F] flex border-b border-solid border=[#3c3c41]">
      <div className="w-2/12">
        <img
          className="h-30 w-100"
          src="https://wallpapercave.com/wp/wp2700223.jpg"
          alt="logo_marvel"
        />
      </div>
      <div className="w-2/12 flex uppercase">
        <div className="flex items-center justify-center h-full w-1/2">
          <h3 className=" text-[#F0E6D2] text-sm ">Home</h3>
        </div>
        <div
          className={`cursor-pointer flex items-center justify-center h-full w-1/2 ${containColor}`}
          onClick={handleClick}
        >
          <h3 className={`text-sm ${textColor} `}>Personaje</h3>
        </div>
      </div>
      <div className="w-8/12 flex justify-end m-auto mr-12">
        <AiFillBell className="text-[#F0E6D2] text-xl cursor-pointer mr-3 hover:text-[#C89B3C] " />
        <AiFillSetting className="text-[#F0E6D2] text-xl cursor-pointer hover:text-[#C89B3C]" />
      </div>
    </div>
  );
};

export default NavBar;
