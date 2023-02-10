import React from "react";

const Footer = ({ getnewColors }) => {
  return (
    <div
      onClick={() => getnewColors()}
      className="bg-black h-32 flex justify-center items-center p-2 hover:cursor-pointer hover:opacity-80"
    >
      <h2 className="text-[16px] text-white">New palette: Space / Click</h2>
    </div>
  );
};

export default Footer;
