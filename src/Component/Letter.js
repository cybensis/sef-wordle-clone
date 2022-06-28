import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { ColorContext } from "../Context/ColorContext";

function Letter({ letterPos, attemptVal }) {
  const { frameColor, fontColor } = useContext(ColorContext);
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  return (
    <div
      className="Letter"
      id={attemptVal + "-" + letterPos}
      style={{ borderLeftColor: frameColor }}
    >
      <p style={{ color: fontColor }}>{letter}</p>
    </div>
  );
}

export default Letter;
