import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { saveState } from "../utils/Store.js";
import { loadState } from "../utils/Store.js";

class JumbleService {
  activeJumble(jumbleID) {
    const grabbedJumble = AppState.jumbles.find(jumble => jumble.id == jumbleID)
    console.log(grabbedJumble)
    AppState.activeJumble = grabbedJumble
    console.log(AppState)
    this.startGame()
  }
  submitJumble(submission){
    const activeBody = AppState.activeJumble
    if (submission == activeBody.body) {
      window.alert('These are the same! congrats you can type')
      this.endGame()
    }
  }
  tickTimer(){
    const jumbleTime = AppState.activeJumble
    jumbleTime.gameTime += 1
  }
  startGame(){
    const timer = AppState.activeJumble
    timer.gameTime = 0
    setInterval(this.tickTimer, 1000)
    console.log(timer.gameTime)
  }
  endGame(){
    console.log(AppState.activeJumble.gameTime)
    if (AppState.activeJumble.fastestTime == null) {
      AppState.activeJumble.fastestTime = AppState.activeJumble.gameTime
    } else if (AppState.activeJumble.fastestTime > AppState.activeJumble.gameTime){
      AppState.activeJumble.fastestTime = AppState.activeJumble.gameTime
    }
    console.log(AppState.activeJumble.fastestTime)
  }
  saveTime(){

  }
  loadTime(){

  }
}
  
export const jumbleService = new JumbleService()