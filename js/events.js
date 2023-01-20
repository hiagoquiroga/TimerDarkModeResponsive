import {
  buttonPlay,
  buttonPause,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonCafe,
  buttonFireplace,
  buttonStop,
  buttonChanger,
  buttonChangerMoon,
  $html,
  inputCafeVolume,
  inputFireplaceVolume,
  inputForestVolume,
  inputRainVolume
} from "./elements.js"

export default function({controls, timer, sound}) {

  buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.pressButton()
})
  

buttonStop.addEventListener('click', function() {
  controls.stop()
  timer.reset()
  sound.pressButton()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonForest.addEventListener('click', function() {
  controls.forest()
  sound.forestAudioStart()
  sound.rainAudioPause()
  sound.cafeAudioPause()
  sound.fireplaceAudioPause()

})

buttonRain.addEventListener('click', function() {
  controls.rain()
  sound.rainAudioStart()
  sound.forestAudioPause()
  sound.cafeAudioPause()
  sound.fireplaceAudioPause()
  
})

buttonCafe.addEventListener('click', function() {
  controls.cafe()
  sound.cafeAudioStart()
  sound.forestAudioPause()
  sound.rainAudioPause()
  sound.fireplaceAudioPause()
  
})

buttonFireplace.addEventListener('click', function() {
  controls.fireplace()
  sound.fireplaceAudioStart()
  sound.forestAudioPause()
  sound.rainAudioPause()
  sound.cafeAudioPause()
  
})

buttonPlus.addEventListener('click', function() {
  let newMinutes = controls.plus()
  timer.updateDisplay(newMinutes, 0)
  timer.uptadeMinutes(newMinutes)
  sound.pressButton()
})

buttonMinus.addEventListener('click', function(){
  let newMinutes = controls.minus()
  timer.updateDisplay(newMinutes, 0)
  timer.uptadeMinutes(newMinutes)
  sound.pressButton()
})

buttonChanger.addEventListener("click", function() {
  $html.classList.toggle('dark-mode')
  controls.hideSun()
})

buttonChangerMoon.addEventListener('click', function (){
  $html.classList.toggle('dark-mode')
  controls.hideMoon()
}) 

  inputForestVolume.addEventListener('input', sound.setAudioVolume)
  inputRainVolume.addEventListener('input', sound.setAudioVolume)
  inputCafeVolume.addEventListener('input', sound.setAudioVolume)
  inputFireplaceVolume.addEventListener('input', sound.setAudioVolume)

}