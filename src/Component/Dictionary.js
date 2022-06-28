import React, { useState, useContext } from "react";
import axios from "axios";
import { ColorContext } from "../Context/ColorContext";

const Dictionary = () => {
  const { ThemeColor1, ThemeColor3, fontColor } = useContext(ColorContext);
  const [guess, setGuess] = useState("");
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  async function checkValidWord() {
    document.querySelector(".currentQuery").textContent =
      "You queried: " + guess.toUpperCase();
    // If the API request does not find the word, it will throw a 404, so the catch should only ever return the "Thats not a word" response,
    // but I put the ternery there just in case.

    if (guess.length == 5) {
      try {
        const response = await axios.get(apiUrl + guess);
        document.querySelector(".isValidWord").textContent =
          response.status == 200
            ? "Thats a valid word 😎 "
            : "Thats not a word 😤";
        if (response.status == 200) {
          compareWords(guess);
        }
      } catch (e) {
        document.querySelector(".isValidWord").textContent =
          "Thats not a word 😤";
      }
    } else {
      document.querySelector(".isValidWord").textContent =
        "Thats not a 5 letter word";
    }
  }

  var wordOfTheDay = "HELLO"; // Temporarily defining the word of the day for testing

  async function compareWords(guessedWord) {
    guessedWord = guessedWord.toUpperCase();
    var correctLocations = [];
    var incorrectLocations = []; //Initialising arrays to store the locations of correct letter locations, and correct letter but incorrect location index's
    document.querySelector(".isWordCorrect").textContent = "";

    const wordOfTheDayArray = wordOfTheDay.split("");
    const guessedWordArray = guessedWord.split(""); // Splitting the words into an array of it's letters

    if (guessedWord != wordOfTheDay) {
      for (let i = 0; i < wordOfTheDayArray.length; i++) {
        // Loop through each letter of the word of the day
        if (wordOfTheDayArray[i] == guessedWordArray[i]) {
          // Compare the letters of the word of the day to the guessed word at the same index
          correctLocations.push(i); // Adds the index of the correct letter location to the correct locations array
        }
        for (let j = 0; j < wordOfTheDayArray.length; j++) {
          if (wordOfTheDayArray[i] == guessedWordArray[j]) {
            // Loop through each letter of the guessed word and compare it to the current letter of the word of the day denoted by i
            incorrectLocations.push(j); // Adds the index of correct letter but incorrect location to the incorrect locations array
          }
        }
      }

      for (let i = 0; i < 5; i++) {
        document.querySelector(".letters" + i).textContent =
          guessedWordArray[i];
      }

      for (let i = 0; i < 5; i++) {
        document.querySelector(".letters" + i).style.color = ThemeColor3;
      }

      for (let i = 0; i < incorrectLocations.length; i++) {
        document.querySelector(".letters" + incorrectLocations[i]).style.color =
          "orange";
      }
      for (let i = 0; i < correctLocations.length; i++) {
        document.querySelector(".letters" + correctLocations[i]).style.color =
          ThemeColor1;
      }
    } else {
      for (let i = 0; i < 5; i++) {
        document.querySelector(".letters" + i).textContent =
          guessedWordArray[i];
      }
      for (let i = 0; i < 5; i++) {
        document.querySelector(".letters" + i).style.color = ThemeColor1;
      }
      document.querySelector(".isWordCorrect").textContent =
        "You guessed the word!";
    }
  }

  return (
    <div className="guessField" style={{ margin: "100px", display: "none", visibility: "hidden" }}>
      <h1 style={{ color: fontColor }}>Query API for valid word</h1>
      <input
        placeholder="Check for a valid word"
        name="guess"
        onChange={(event) => setGuess(event.target.value)}
      ></input>
      <button onClick={checkValidWord}>Submit Guess</button>
      <h2 style={{ color: fontColor }}>Is this a valid word?</h2>
      <p className="currentQuery"></p>
      <p className="isValidWord"></p>
      <br></br>
      <p className="isWordCorrect"></p>
      <p className="letters0"></p>
      <p className="letters1"></p>
      <p className="letters2"></p>
      <p className="letters3"></p>
      <p className="letters4"></p>
    </div>
  );
};

export default Dictionary;
