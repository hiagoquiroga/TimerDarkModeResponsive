const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')  
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCafe = document.querySelector('.cafe')
const buttonFireplace = document.querySelector('.fireplace')
const $html = document.querySelector('html')
const buttonChanger = document.querySelector('.changer')
const buttonChangerMoon= document.querySelector('.changerMoon')
const inputForestVolume = document.querySelector('#forest-volume')
const inputRainVolume = document.querySelector('#rain-volume')
const inputCafeVolume = document.querySelector('#cafe-volume')
const inputFireplaceVolume = document.querySelector('#fireplace-volume')

let minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
  buttonMinus,
  buttonPlay,
  buttonPause,
  buttonPlus,
  buttonForest,
  buttonRain,
  buttonStop,
  buttonCafe,
  buttonFireplace,
  buttonChanger,
  minutesDisplay,
  secondsDisplay,
  $html,
  buttonChangerMoon,
  inputCafeVolume,
  inputFireplaceVolume,
  inputForestVolume,
  inputRainVolume
}