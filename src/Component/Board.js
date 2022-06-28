import React, { useState, useContext } from "react";
import { boardDefault } from "../Words";
import Letter from "./Letter";
import { ColorContext } from "../Context/ColorContext";

function Board() {
  const [board, setBoard] = useState(boardDefault);
  const {
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
  } = useContext(ColorContext);
  return (
    <div className="board" style={{ borderColor: frameColor }}>
      <div className="row" id="row-0" style={{ borderColor: frameColor }}>
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
      </div>
      <div className="row" id="row-1" style={{ borderColor: frameColor }}>
        <Letter letterPos={0} attemptVal={1} />
        <Letter letterPos={1} attemptVal={1} />
        <Letter letterPos={2} attemptVal={1} />
        <Letter letterPos={3} attemptVal={1} />
        <Letter letterPos={4} attemptVal={1} />
      </div>
      <div className="row" id="row-2" style={{ borderColor: frameColor }}>
        <Letter letterPos={0} attemptVal={2} />
        <Letter letterPos={1} attemptVal={2} />
        <Letter letterPos={2} attemptVal={2} />
        <Letter letterPos={3} attemptVal={2} />
        <Letter letterPos={4} attemptVal={2} />
      </div>
      <div className="row" id="row-3" style={{ borderColor: frameColor }}>
        <Letter letterPos={0} attemptVal={3} />
        <Letter letterPos={1} attemptVal={3} />
        <Letter letterPos={2} attemptVal={3} />
        <Letter letterPos={3} attemptVal={3} />
        <Letter letterPos={4} attemptVal={3} />
      </div>
      <div className="row" id="row-4" style={{ borderColor: frameColor }}>
        <Letter letterPos={0} attemptVal={4} />
        <Letter letterPos={1} attemptVal={4} />
        <Letter letterPos={2} attemptVal={4} />
        <Letter letterPos={3} attemptVal={4} />
        <Letter letterPos={4} attemptVal={4} />
      </div>
      <div className="row" id="row-5" style={{ borderColor: frameColor }}>
        <Letter letterPos={0} attemptVal={5} />
        <Letter letterPos={1} attemptVal={5} />
        <Letter letterPos={2} attemptVal={5} />
        <Letter letterPos={3} attemptVal={5} />
        <Letter letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
}

export default Board;
