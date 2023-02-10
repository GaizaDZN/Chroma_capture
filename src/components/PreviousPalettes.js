import React from "react";
import MiniSwatches from "./MiniSwatches";
const PreviousPalettes = ({ colorSchemes, swatchClickHandler }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-800 px-3 h-full">
      {colorSchemes.map((palette, index) => (
        <MiniSwatches
          key={index}
          colorMode={palette.mode}
          colors={palette.colors}
          swatchClickHandler={swatchClickHandler}
        />
      ))}
      <p className=" text-white">
        Click a palette to save it to the clipboard.
      </p>
    </div>
  );
};

export default PreviousPalettes;
