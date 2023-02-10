import React from "react";
import Swatch from "./Swatch";

const Swatches = ({ colors, swatchClickHandler }) => {
  return (
    <div className="flex bg-gray-200 w-full h-full ">
      {colors.map((color) => (
        <Swatch
          key={color.hex.value}
          color={color}
          swatchClickHandler={swatchClickHandler}
        />
      ))}
    </div>
  );
};

export default Swatches;
