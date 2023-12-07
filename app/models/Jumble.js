import { generateId } from "../utils/GenerateId.js";

export class Jumble {
  constructor( data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.gameTime = null

  }

    get JumbleCard(){ // a basic list template to get drawing
        return `<li><button onclick="app.JumbleController.activeJumble('${this.id}')" class="btn btn-danger">${this.name}</button></li>`
    }
    get ActiveJumbleCard(){
      return `<div>${this.body}</div>
        <textarea name="body"  rows="10" class="w-100" id="text-box" maxlength=10000></textarea>
        <button onclick="app.JumbleController.submitJumble()" type="button" class="btn btn-danger">DONE</button>
      `
    }
}