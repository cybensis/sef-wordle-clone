import React from "react";
import App from "../App";
import axios from "axios";

var words = require('an-array-of-english-words')
var wordOfTheDay = ""
const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function setRandomWordOfTheDay(){
    words = words.filter(d => /^.{5}$/.test(d)) // Filters the large array of words for only 5 letter words
    var wordAttempt = words[getRandomInt()].toUpperCase() // Chooses a random word from the array and is converted to upper case for guessing


    try { // Checks if the word is valid before assigning as word of the day
        const response = await axios.get(apiUrl + wordAttempt);
        if (response.status == 200) {
            wordOfTheDay = wordAttempt;
        }
      } catch (e) {
        setRandomWordOfTheDay()
      }

      console.log(wordOfTheDay)
  }


function getRandomInt() {  // Random number between 0 and 12634 (length of 5 letter word array)
    return Math.floor(Math.random() * 12634);
}

function getWordOfTheDay(){
    return wordOfTheDay
}
export { getWordOfTheDay, setRandomWordOfTheDay }
export default words;