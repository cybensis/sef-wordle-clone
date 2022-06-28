import React from "react";
import "../App.css";

const Wordle = () => {
  const [BackgroundColor, setBackgroundColor] = React.useState("white");
  const [frameColor, setFrameColor] = React.useState("black");
  const [ThemeColor1, setThemeColor1] = React.useState("#6aaa64");
  const [ThemeColor2, setThemeColor2] = React.useState("#c9b458");
  const [ThemeColor3, setThemeColor3] = React.useState("#787c7e");
  const [fontColor, setFontColor] = React.useState("black");
  const HandleDarkMode = (event) => {
    event.preventDefault();
    setBackgroundColor("black");
    setFrameColor("white");
    setFontColor("white");
    setThemeColor1("#6aaa64");
    setThemeColor2("#c9b458");
    setThemeColor3("#787c7e");
  };

  const HandleColorBlindMode = (event) => {
    event.preventDefault();
    setBackgroundColor("white");
    setFrameColor("black");
    setFontColor("black");

    setThemeColor1("#f89d6f");
    setThemeColor2("#85bff9");
    setThemeColor3("#787c7e");
  };

  const HandleDarkColorBlindMode = (event) => {
    event.preventDefault();
    setBackgroundColor("black");
    setFrameColor("white");
    setFontColor("white");

    setThemeColor1("#f89d6f");
    setThemeColor2("#85bff9");
    setThemeColor3("#787c7e");
  };

  const HanldeStandardColor = (event) => {
    event.preventDefault();
    setBackgroundColor("white");
    setFrameColor("black");
    setFontColor("black");

    setThemeColor1("#6aaa64");
    setThemeColor2("#c9b458");
    setThemeColor3("#787c7e");
  };

  return (
    <>
      <div style={{ backgroundColor: BackgroundColor }}>
        <button onClick={HandleDarkMode}>Dark Mode</button>
        <p style={{ color: fontColor }}>Word</p>
      </div>
      <div style={{ backgroundColor: frameColor }}>
        <button onClick={HandleColorBlindMode}>Color Blind Mode</button>
      </div>
      <div style={{ backgroundColor: ThemeColor1 }}>
        <button onClick={HandleDarkColorBlindMode}>
          Dark Color Blind Mode
        </button>
      </div>
      <div style={{ backgroundColor: ThemeColor2 }}>
        <button onClick={HanldeStandardColor}>Standard Color</button>
      </div>
      <div style={{ backgroundColor: ThemeColor3 }}>1</div>
    </>
  );
};

export default Wordle;
