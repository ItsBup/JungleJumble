import { generateId } from "../utils/GenerateId.js";

export class Jumble {
  constructor( data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

    get JumbleCard(){ // a basic list template to get drawing
        return `<li><button onclick="app.JumbleController.activeJumble('${this.id}')" class="btn btn-outline-light">${this.name}</button></li>`
    }
    get ActiveJumble(){
      return `<textarea rows="10" class="w-100" id="text-box" maxlength=100></textarea>`
    }
}