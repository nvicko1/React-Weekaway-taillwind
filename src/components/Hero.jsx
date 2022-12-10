import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://wallpaper.dog/large/5468644.jpg"
        alt="paradise"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find your special trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            doloribus nisi facilis perspiciatis cumque nemo officia consequuntur
            libero laborum ab!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
