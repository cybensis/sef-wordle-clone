import React from "react";
import "../App.css";
const ColorContext = React.createContext();

const ColorProvider = ({ children }) => {
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
    <ColorContext.Provider
      value={{
        BackgroundColor,
        frameColor,
        ThemeColor1,
        ThemeColor2,
        ThemeColor3,
        fontColor,
        HandleDarkMode,
        HandleColorBlindMode,
        HandleDarkColorBlindMode,
        HanldeStandardColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };
