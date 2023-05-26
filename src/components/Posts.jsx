import React from "react";

const Posts = () => {
  return (
    <div className="h-60 flex pt-10 pb-5 pl-9 pr-9">
      <div className="w-2/5 ml-5 mr-3 rounded-md border border-solid border-[#42331A]">
        Barra de poderes
      </div>
      <div className=" w-1/3 ml-3 mr-3 rounded-md border border-solid border-[#42331A]">
        {/* <video
          src="https://www.youtube.com/watch?v=nPfuFbFt5Ek"
          controls
          width="640"
          height="360"
        ></video> */}
        <iframe
          controls="0"
          mute="1"
          rel="0"
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=nPfuFbFt5Ek"
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
