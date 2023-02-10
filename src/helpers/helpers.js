import axios from "axios";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const rand255 = () => {
  return Math.floor(Math.random() * 256);
};

export const randColor = () => {
  const rgb = {
    r: rand255(),
    g: rand255(),
    b: rand255(),
  };

  const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
  return hex;
};

// Generates a random ugly palette. Try to find an api or something that isnt random
export const getRandPalette = () => {
  return [randColor(), randColor(), randColor(), randColor(), randColor()];
};

// Colormind api
const url = "https://www.thecolorapi.com";

// Fetches a random color palette. Uses "default" model if no model string provided
export async function getColorScheme(
  colorMode = "analogic",
  color = "",
  random = true
) {
  const formattedHex = random
    ? randColor().slice(1)
    : rgbToHex(color.r, color.g, color.b).slice(1);
  const fetchUrl = `${url}/scheme?hex=${formattedHex}&mode=${colorMode}`;

  try {
    const response = await axios.get(fetchUrl);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
