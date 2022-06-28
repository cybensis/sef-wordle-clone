import ColorChange from "./Component/ColorChange";
import Dictionary from "./Component/Dictionary";
import Board from "./Component/Board";
import Popup from "./Component/Popup";
import Keyboard from "./Component/Keyboard";
import { CompareWords, checkValidWord, revealPopup, lose } from "./Component/Guess";
import { createContext, useState, useContext } from "react";
import { boardDefault } from "./Words";
import { ColorContext } from "./Context/ColorContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as React from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [currGuess, setCurrGuess] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const onSelectLetter = (keyVal) => {
    console.log(currAttempt);
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    setCurrGuess(currGuess + keyVal);
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    setCurrGuess(currGuess.slice(0, -1));
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    checkValidWord(currGuess, currAttempt.attempt).then((response) => {
      if (response == false) {
        document.querySelector(".isWordCorrect").textContent =
          "This is not a valid word!";
          alert('This is not a valid word!')
        return;
      } else {
        const isWordCorrect = CompareWords(
          currGuess,
          currAttempt.attempt,
          ThemeColor1,
          ThemeColor2,
          ThemeColor3
        );
        if (isWordCorrect) {
          revealPopup();
        } else {
          setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
          setCurrGuess("");
        }
        if (currAttempt.attempt == 5) {
          lose()
          revealPopup();
        }
      }
    });
  };

  return (
<div style={{ backgroundColor: BackgroundColor }}>
      <Popup />
      <Button variant="contained" onClick={handleOpen}>
        Settings
      </Button>
      <Button variant="contained" onClick={() => { document.querySelector(".popupContainer").style.display = "block";}}>
        Statistics
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change Color
          </Typography>
          <Button variant="contained" onClick={HandleDarkMode}>
            Dark Mode
          </Button>
          <br />
          <br />
          <Button variant="contained" onClick={HandleColorBlindMode}>
            Color Blind Mode
          </Button>
          <br />
          <br />
          <Button variant="contained" onClick={HandleDarkColorBlindMode}>
            Dark Color Blind Mode
          </Button>
          <br />
          <br />
          <Button variant="contained" onClick={HanldeStandardColor}>
            Standard Color
          </Button>
        </Box>
      </Modal>
      <Dictionary />
      <br />
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          setCurrGuess,
          currGuess,
        }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;



// function compareWords(guessedWord) {
//   console.log("compareWords")
//   // var guessedWord = document
//   //   .getElementById("wordGuess")
//   //   .value.toString()
//   //   .toLower(); // Converts inputted word to a lowercase string
//   var correctLocations = [];
//   var incorrectLocations = []; //Initialising arrays to store the locations of correct letter locations, and correct letter but incorrect location index's

//   if (guessedWord != wordOfTheDay) {
//     const wordOfTheDayArray = wordOfTheDay.split("");
//     const guessedWordArray = guessedWord.split(""); // Splitting the words into an array of it's letters

//     for (let i = 0; i < wordOfTheDayArray.length; i++) {
//       // Loop through each letter of the word of the day
//       if (wordOfTheDayArray[i] == guessedWordArray[i]) {
//         // Compare the letters of the word of the day to the guessed word at the same index
//         correctLocations.push(i); // Adds the index of the correct letter location to the correct locations array
//       }
//       for (let j = 0; j < wordOfTheDayArray.length; j++) {
//         if (wordOfTheDayArray[i] == guessedWordArray[j]) {
//           // Loop through each letter of the guessed word and compare it to the current letter of the word of the day denoted by i
//           incorrectLocations.push(j); // Adds the index of correct letter but incorrect location to the incorrect locations array
//         }
//       }
//     }
//     console.log(correctLocations);
//     console.log(incorrectLocations);
//   } else {
//     window.alert("You guessed the word!");
//   }
// }
