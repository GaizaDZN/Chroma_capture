import React from "react";

const MiniSwatch = ({ color, palette, swatchClickHandler }) => {
  const colorStyle = {
    backgroundColor: `${color}`,
  };

  return (
    <div
      className=" w-full max-w-full min-h-full m-0 p-0"
      style={colorStyle}
    ></div>
  );
};

export default MiniSwatch;
