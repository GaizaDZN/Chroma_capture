import React from "react";
import MiniSwatch from "./MiniSwatch";

const MiniSwatches = ({ colors, swatchClickHandler, colorMode }) => {
  // console.log(JSON.stringify(colors));
  const getHexValues = () => {
    const hexes = [];
    colors.forEach((color) => {
      hexes.push(color.hex.value);
    });
    return hexes;
  };
  return (
    <div
      className="transition-all relative mt-1 flex h-12 w-full max-w-xs bg-slate-50 hover:cursor-pointer opacity-70 hover:opacity-100 border-opacity-0 hover:border-2"
      onClick={(e) => swatchClickHandler(getHexValues(), e)}
    >
      <p className="absolute bottom-0 mx-3 mb-1 max-w-full text-white">
        {colorMode}
      </p>
      {colors.map((color) => (
        <MiniSwatch
          key={color.hex.value}
          color={color.hex.value}
          palette={colors}
          swatchClickHandler={swatchClickHandler}
        />
      ))}
    </div>
  );
};

export default MiniSwatches;
