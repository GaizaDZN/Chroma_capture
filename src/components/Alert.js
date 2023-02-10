import React from "react";

const Alert = ({ alertVisible }) => {
  const visibleAlert = () => {
    return (
      <div className="absolute left-0 right-0 top-10 h-10 w-fit m-auto bg-black text-white rounded-full opacity-100 transition-all duration-500 p-2">
        <h2 className="relative">Saved to the clipboard!</h2>
      </div>
    );
  };
  const hiddenAlert = () => {
    return (
      <div className="absolute left-0 right-0 top-10 h-10 w-fit m-auto bg-black text-white rounded-full opacity-0 transition-all duration-500 p-2">
        <h2 className="relative">Saved to the clipboard!</h2>
      </div>
    );
  };
  return alertVisible ? visibleAlert() : hiddenAlert();
};

export default Alert;
