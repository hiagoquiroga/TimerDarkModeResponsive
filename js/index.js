import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonMinus,
  buttonPlay,
  buttonPause,
  buttonPlus,
  buttonForest,
  buttonRain,
  buttonStop,
  buttonCafe,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMinus,
  buttonPlus,
  buttonForest,
  buttonRain,
  buttonCafe,
  buttonFireplace
})

const timer = Timer({
  minutesDisplay, secondsDisplay, resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})