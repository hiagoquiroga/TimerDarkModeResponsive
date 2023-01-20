import {
  buttonMinus,
  buttonPlay,
  buttonPause,
  buttonPlus,
  buttonForest,
  buttonRain,
  buttonStop,
  buttonCafe,
  buttonChanger,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay,
  buttonChangerMoon} from "./elements.js";

  import Sounds from "./sounds.js";
  
  import Timer from "./timer.js"
  
  export default function Controls ({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonMinus,
    buttonPlus,
    buttonForest,
    buttonRain,
    buttonCafe,
    buttonFireplace,
  }) {
  
  function play () {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
 }

 function pause() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
 }

  function stop() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function forest() {
    buttonForest.classList.add('clickon')
    buttonCafe.classList.remove('clickon')
    buttonFireplace.classList.remove('clickon')
    buttonRain.classList.remove('clickon')
  }

  function rain() {
    buttonRain.classList.add('clickon')
    buttonCafe.classList.remove('clickon')
    buttonFireplace.classList.remove('clickon')
    buttonForest.classList.remove('clickon')
  }

  function cafe() {
    buttonCafe.classList.add('clickon')
    buttonForest.classList.remove('clickon')
    buttonFireplace.classList.remove('clickon')
    buttonRain.classList.remove('clickon')
  }

  function fireplace() {
    buttonForest.classList.remove('clickon')
    buttonCafe.classList.remove('clickon')
    buttonFireplace.classList.add('clickon')
    buttonRain.classList.remove('clickon')
  }

  
  function reset() {
    buttonPlay.classList.remove('hide')
  }

  function hideMoon() {
    buttonChanger.classList.remove('hide')
    buttonChangerMoon.classList.add('hide')
  }

  function hideSun() {
    buttonChanger.classList.add('hide')
    buttonChangerMoon.classList.remove('hide')
  }

  function dontPlay() {
    buttonPlay.classList.add('hide')
  }

  function plus() {
    let sum = Number(minutesDisplay.textContent)+5
    return sum
  }

function minus() {
  let sub = Number(minutesDisplay.textContent)-5
  let nothing = Number(minutesDisplay.textContent) == 0


  if (Number(minutesDisplay.textContent) >= 5) {
    return sub
  }
  else {
   return nothing = 0
  }
}


return {
  play,
  pause,
  stop,
  plus,
  minus,
  forest,
  cafe,
  fireplace,
  rain,
  reset,
  dontPlay,
  hideMoon,
  hideSun
}

  }
