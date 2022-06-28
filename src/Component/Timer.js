import React, { useEffect } from "react";
import { useState } from "react";


const Timer = () => {
    const [timer, setTimer] = useState();
    useEffect(() => {
        setTimeout(() => {
            // Timing code yoinked from https://stackoverflow.com/questions/54256629/countdown-to-midnight-refresh-every-day
            const midnight = new Date();
            const currentTime = new Date();
            midnight.setHours(24,0,0,0);
            // This gets the time difference between the current time and the start of the next day (midnight), in seconds
            let timeDiff = (midnight.getTime() - currentTime.getTime()) / 1000;
            // Seconds from midnight / 3600 = the hours left until midnight
            const hours = Math.floor(timeDiff / 3600);
            // Then we remove the hours from the equation, so we are only left with the minutes and seconds.
            timeDiff = timeDiff - (hours * 3600);
            // (seconds from midnight - the hours in seconds) / 60 = the minutes until midnight.
            const minutes = Math.floor(timeDiff / 60);
            // Now remove the minutes from the equation, and now we are left with only seconds, which we floor to make it non-decimal.
            timeDiff = timeDiff - (minutes * 60); 
            const seconds = Math.floor(timeDiff);
            // This appends a 0 to the start of each time, then if that time extends 2 characters (e.g. instead of 07 for the hours, it becomes 011)
            // then the 0 gets removed.
            timeDiff = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2) + ':' + ("0" + seconds).slice(-2)
            setTimer(timeDiff);
        },1000);
    })

    function changeVisibility() {
        document.querySelector(".timerDiv").style.display = "block";
    }

    return(
        <div className="timerDiv">
            <h1>NEXT WORDLE</h1>
            <p>{timer}</p>
        </div>
    )
} 

export default Timer;