import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PreviousPalettes from "./PreviousPalettes";
import { ChromePicker } from "react-color";
import ColorModes from "./ColorModes";
const Sidebar = ({
  colorSchemes,
  swatchClickHandler,
  handleHueChange,
  hue,
  colorMode,
  handleColorModeChange,
  getnewColors,
  handleChecked,
  check,
}) => {
  return (
    <div className=" w-2/6  h-full bg-slate-500 max flex flex-col justify-between  ">
      <Header />
      <ChromePicker
        disableAlpha={true}
        width={"100%"}
        color={hue}
        onChange={(e) => handleHueChange(e)}
      />
      <ColorModes
        colorMode={colorMode}
        handleChecked={handleChecked}
        handleColorModeChange={handleColorModeChange}
        check={check}
      />
      <PreviousPalettes
        colorSchemes={colorSchemes}
        swatchClickHandler={swatchClickHandler}
      />
      <Footer getnewColors={getnewColors} />
    </div>
  );
};

export default Sidebar;
