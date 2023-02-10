import React from "react";

const Swatch = ({ color, swatchClickHandler }) => {
  const colorStyle = {
    backgroundColor: `${color.hex.value}`,
  };
  return (
    <div className=" w-full min-h-full m-0 p-0  flex" style={colorStyle}>
      <div
        className="h-16 w-full flex justify-center items-center p-3 self-end hover:cursor-pointer hover:opacity-30"
        style={{ backgroundColor: "#000000ab" }}
        onClick={(e) => swatchClickHandler(color.hex.value, e)}
      >
        <div className="text-center">
          <p className="text-white">{color.name.value}</p>
          <p className="text-gray-400">{color.hex.value}</p>
        </div>
      </div>
    </div>
  );
};

export default Swatch;
