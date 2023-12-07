import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";

class JumbleService {
  activeJumble(jumbleID) {
    const grabbedJumble = AppState.jumbles.find(jumble => jumble.id == jumbleID)
    console.log(grabbedJumble)
    AppState.activeJumble = grabbedJumble
    console.log(AppState)
  }
}

export const jumbleService = new JumbleService()