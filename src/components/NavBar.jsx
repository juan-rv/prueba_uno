import React, { useState } from "react";
import { AiFillBell, AiFillSetting } from "react-icons/ai";

const NavBar = () => {
  const [selected, setSelected] = useState(false); //estado para la activacion de una etiqueta

  const handleClick = () => {
    setSelected(!selected); // funcion que cambia el valor del estado seleccionado
  };

  const containColor = selected //constante con estilos usada para el momento de seleccionar el estado por medio de operadores ternarios
    ? " bg-gradient-to-t from-[#231f20] to-[#222222] text-[#C89B3C] "
    : "";

  const textColor = selected ? "text-[#C89B3C]" : "text-[#F0E6D2]"; //constante con estilos usada el momento de seleccioar el estado por medio de operadores ternarios

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
          <h3 className=" text-[#F0E6D2] text-lg">Home</h3>
        </div>
        <div
          className={`cursor-pointer flex items-center justify-center h-full w-1/2 ${containColor}`}
          onClick={handleClick}
          // uso del evento onclick, por medio de un click permite hacer un cambio del estado y usar la funcion handleclick que da un cambio en el estado de selecter
        >
          <h3 className={`text-lg ${textColor} `}>Personajes</h3>
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
