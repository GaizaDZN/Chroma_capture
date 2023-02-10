import React from "react";
import Swatches from "./Swatches";
const PalettePicker = ({ colors, swatchClickHandler }) => {
  return (
    <div className="container  flex flex-col items-center justify-center bg-slate-50">
      <Swatches colors={colors} swatchClickHandler={swatchClickHandler} />
    </div>
  );
};

export default PalettePicker;
