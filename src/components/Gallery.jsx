import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
