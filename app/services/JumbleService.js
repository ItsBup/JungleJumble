import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";

class JumbleService {
  addMessage(message) {
    AppState.examples.push(new Example(message))
  }
}

export const jumbleService = new JumbleService()