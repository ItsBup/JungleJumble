import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";

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
    AppState.totalTime += 1
  }
  startGame(){
    setInterval(this.tickTimer, 1000)
    console.log(AppState.totalTime)
  }
  endGame(){
    console.log(AppState.totalTime)
  }

}
  
export const jumbleService = new JumbleService()