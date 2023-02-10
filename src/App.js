import PalettePicker from "./components/PalettePicker";
import Sidebar from "./components/Sidebar";
import Alert from "./components/Alert";
import { useState, useEffect } from "react";
import { getColorScheme } from "./helpers/helpers";

function App() {
  const [oldColors, setOldColors] = useState();
  const [fetchedColors, setFetchedColors] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hue, setHue] = useState();
  const [alertVisible, setAlertVisible] = useState(false);
  const [colorMode, setColorMode] = useState("analogic");
  const [check, setChecked] = useState(true);
  const [savedPalette, setSavedPalette] = useState([]);

  const handleHueChange = (color) => {
    setHue(color.rgb);
  };

  const handleColorModeChange = (e) => {
    setColorMode(e.target.value);
  };

  const handleChecked = (e) => {
    setChecked(!check);
  };

  const getnewColors = () => {
    getColorScheme(colorMode, hue, check).then((res) => {
      let newOldColors = [...oldColors, res];
      if (newOldColors.length > 5) {
        newOldColors.shift();
      }
      setIsLoading(false);
      setFetchedColors(res.colors);
      setOldColors(newOldColors);
      setHue(res.colors[0].rgb);
    });
  };

  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      getnewColors();
    }
  };

  const swatchClickHandler = (palette, e) => {
    navigator.clipboard.writeText(palette);
    setSavedPalette(palette);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 1500);
  };

  const renderLoading = () => {
    return (
      <div className="transition-all h-24 duration-1000 absolute left-0 right-0 m-auto">
        <div className="relative m-auto bg-black text-white w-full h-full">
          Fetching color data...
        </div>
      </div>
    );
  };

  const renderApp = () => {
    return (
      <div
        className="transition-all duration-1000 m-0 p-0 flex h-screen mx-auto bg-gray-200"
        tabIndex={0}
        onKeyUp={handleKeyUp}
      >
        <Alert alertVisible={alertVisible} />
        <Sidebar
          handleColorModeChange={handleColorModeChange}
          colorMode={colorMode}
          hue={hue}
          handleHueChange={handleHueChange}
          colorSchemes={oldColors}
          swatchClickHandler={swatchClickHandler}
          getnewColors={getnewColors}
          handleChecked={handleChecked}
          check={check}
        />
        <PalettePicker
          colors={fetchedColors}
          swatchClickHandler={swatchClickHandler}
        />
      </div>
    );
  };

  useEffect(() => {
    getColorScheme(colorMode, "", check).then((res) => {
      setIsLoading(false);
      setFetchedColors(res.colors);
      setOldColors([res]);
      setHue(res.colors[0].rgb);
    });
  }, []);

  return isLoading ? renderLoading() : renderApp();
}

export default App;
