import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { jumbleService } from "../services/JumbleService.js"
import { getFormData } from "../utils/FormHandler.js"

function _drawJumbles(){
  const jumbles = AppState.jumbles
  let content = ''
  jumbles.forEach(jumble => content += jumble.JumbleCard)
  document.getElementById('jumble-box').innerHTML = content
}

function _drawActiveJumble(){
  const activeJumble = AppState.activeJumble
  let content = activeJumble.ActiveJumbleCard
  document.getElementById('active-box').innerHTML = content
}

function _drawJumbleForm(){
  event.preventDefault
  const form = event.target
  const formData = getFormData(form)
  jumbleService.drawJumbleForm(formData)
  document.getElementById('jumble-form').innerHTML = content
}

export class JumbleController {
  constructor() {
    console.log('The JumbleController has loaded')
    _drawJumbles()
    AppState.on('activeJumble',_drawActiveJumble)
    AppState.on('jumbles',_drawJumbles)
  }
  activeJumble(jumbleID){
    jumbleService.activeJumble(jumbleID)
  }
  submitJumble(){
    let submission = document.getElementById('text-box').value
    console.log(submission)
    jumbleService.submitJumble(submission)
  }
}


