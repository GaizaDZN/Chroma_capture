import React from "react";

const ColorModes = ({
  colorMode,
  handleColorModeChange,
  handleChecked,
  check,
}) => {
  return (
    <div className="w-full flex">
      <div className="bg-black flex items-center justify-center w-full">
        <span className="mx-3 text-white">Random Hue</span>
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => handleChecked(e)}
        ></input>
      </div>
      <select
        className="w-full text-center bg-black text-white"
        value={colorMode}
        onChange={(e) => handleColorModeChange(e)}
      >
        <option value={"analogic"}>Analogic</option>
        <option value={"complement"}>Complement</option>
        <option value={"monochrome"}>Monochrome</option>
        <option value={"triad"}>Triadic</option>
        <option value={"quad"}>Quadratic</option>
      </select>
    </div>
  );
};

export default ColorModes;
