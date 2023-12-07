import { AppState } from "../AppState.js"
import { jumbleService } from "../services/JumbleService.js"

function _drawJumbles(){
  const jumbles = AppState.jumbles
  let content = ''
  jumbles.forEach(jumble => content += jumble.JumbleCard)
  document.getElementById('jumble-box').innerHTML = content
}


export class JumbleController {
  constructor() {
    console.log('The JumbleController has loaded')
    _drawJumbles()
  }

  
}


