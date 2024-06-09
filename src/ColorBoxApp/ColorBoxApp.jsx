import { useState } from "react";
import ColorBox from "./components/ColorBox";

function ColorBoxApp() {
  const [currentColor, setCurrentColor] = useState("");
  const [isChangeColor, setIsChangeColor] = useState(false);
  function handleChangeRed() {
    setIsChangeColor(true);
    setCurrentColor("red");
  }

  function handleChangeYellow() {
    setIsChangeColor(true);
    setCurrentColor("yellow");
  }

  function handleChangeAqua() {
    setIsChangeColor(true);
    setCurrentColor("aqua");
  }

  function handleChangePurple() {
    setIsChangeColor(true);
    setCurrentColor("purple");
  }

  return (
    <>
      <p>Current color: {isChangeColor ? currentColor : "Default"}</p>
      <div className="container">
        <ColorBox
          text="red"
          color={isChangeColor ? currentColor : "red"}
          onClick={handleChangeRed}
        />
        <ColorBox
          text="yellow"
          color={isChangeColor ? currentColor : "yellow"}
          onClick={handleChangeYellow}
        />
        <ColorBox
          text="aqua"
          color={isChangeColor ? currentColor : "aqua"}
          onClick={handleChangeAqua}
        />
        <ColorBox
          text="purple"
          color={isChangeColor ? currentColor : "purple"}
          onClick={handleChangePurple}
        />
      </div>
    </>
  );
}

export default ColorBoxApp;
