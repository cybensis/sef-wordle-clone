import { useEffect } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";
import Timer from "./Timer";


const Popup = () => {

  useEffect(() => {
    if (localStorage.getItem("GamesWon") == null) {
      document.getElementById("gamesWon").innerHTML = "Games Won: 0";
    }
    else {
      document.getElementById("gamesWon").innerHTML = "Games Won: " + localStorage.getItem("GamesWon");
    }
    if (localStorage.getItem("GamesLost") == null) {
      document.getElementById("gamesLost").innerHTML = "Games Lost: 0";
    }
    else {
      document.getElementById("gamesLost").innerHTML = "Games Lost: " + localStorage.getItem("GamesLost");
    }
    if (localStorage.getItem("GamesWon") == null || 0 && localStorage.getItem("GamesLost") == null || 0) {
      document.getElementById("winPercent").innerHTML = "Play a game to see your win percentage!";
    }else{
      var totalGames = parseInt(localStorage.getItem("GamesWon")) + parseInt(localStorage.getItem("GamesLost")) // Calculates win percentage using WinPercentage = GamesWon / TotalGames
      var winPercentage = (parseInt(localStorage.getItem("GamesWon")) / totalGames) * 100
      document.getElementById("winPercent").innerHTML = "Win Percentage: " + Math.round(winPercentage) + '%';
    }

  }, [])

    return(
        <div className="popupContainer" onClick={() => {document.querySelector(".popupContainer").style.display = "none";}}>
        <div className="popupWindow" onClick={(e) => {e.stopPropagation();}}>
          <div className="exitPopup">
              <p onClick={() => {document.querySelector(".popupContainer").style.display = "none";}}>X</p>
            </div>
          <div className="statistics">
            <h1>Statistics</h1>
            <h3 id="gamesWon">Games Won: </h3>
            <h3 id="gamesLost">Games Lost: </h3>
            <h3 id="winPercent">Win Percentage: </h3>
          </div>
          <Timer />
          <div className="shareResults">
            <div className="shareFacebook">
            <FacebookShareButton
              url={"https://www.nytimes.com/games/wordle/index.html"}
              // ADD STATISTICS TO THE QUOTE HERE
              quote={"Check out my wordle statistics: "}
              hashtag="#wordle"
              className={"facebookButton"}>
              <FacebookIcon size={50} />
            </FacebookShareButton>
                <p>Facebook</p>
            </div>
            <div className="shareTwitter">
               <TwitterShareButton
                url={"https://www.nytimes.com/games/wordle/index.html"}
                // ADD STATISTICS TO THE QUOTE HERE
                title={"Check out my wordle statistics: "}
                hashtag="#wordle"
                className={"twitterButton"}
                >
                <TwitterIcon size={50} />
              </TwitterShareButton>
                <p>Twitter</p>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Popup;

