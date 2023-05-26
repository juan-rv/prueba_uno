import React from "react";

const Posts = () => {
  const meta = 200; //constante de meta de peliculas
  const producidas = 180; //constante de peliculas hechas

  const porcentaje = (producidas / meta) * 100; //calculo en porcentaje de las peliculas hechas sobre la meta

  return (
    <div className="h-60 flex pt-10 pb-5 pl-7 pr-7">
      <div className="bg-[#111111] w-2/5  mr-3 rounded-md border border-solid border-[#42331A] pl-5 pr-5">
        <div>
          <h2 className="text-[#F0E6D2] text-xl text-center uppercase mt-3 ">
            Progreso de peliculas producidas
          </h2>
        </div>

        <div className="mt-2">
          <p className="text-[#C89B3C] text-xs text-right"> {meta} Películas</p>
          <p className="text-[#C89B3C] text-xs text-right">
            Meta de Producción
          </p>
        </div>

        <div className="p-0.5 clip-path-polygon transform skew-x-[-10deg] border border-solid border-[#C89B3C] shadow-md shadow-[#C89B3C]">
          <div className="relative h-5 bg-gray-100 ">
            <div
              // propiedad width que nos permite iluminar una cantidad de la barra de progreso en consecuencia del porcentaje de peliculas hechas sobre la meta
              className="h-full  bg-[#3cc4d3]"
              style={{ width: `${porcentaje}%` }}
            ></div>

            {/* se da el uso de un bucle map para generar las 10 secciones de la barra de progreso, cada una correspondinete a 10%*/}
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="absolute top-0 h-full w-px bg-black"
                style={{ left: `${(index + 1) * 10}%` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[#1DA5B4] text-xs text-right mr-10">
            {producidas} Películas
          </p>
          <p className="text-[#1DA5B4] text-xs text-right mr-10">Producidas</p>
        </div>
      </div>

      <div className=" w-1/3 ml-3 mr-3 rounded-md border border-solid border-[#42331A]">
        <iframe
          className=" w-full h-full"
          src="https://www.youtube.com/embed/UhVjp48U2Oc?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className=" w-1/3 ml-3 mr-5 rounded-md border border-solid border-[#42331A]">
        <img
          className="object-cover w-full h-full"
          src="https://lumiere-a.akamaihd.net/v1/images/marvel_1b6d0fad.jpeg?region=478,0,1913,1079&width=960"
          alt="imagen_marvel"
        />
      </div>
    </div>
  );
};

export default Posts;
