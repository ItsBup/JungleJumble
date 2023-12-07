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
    get JumbleForm(){
      return `
      <form onsubmit="app.JumbleController.createJumble()"  class="row bg-white shadow mb-5 rounded">
        <div class="col-12 text-center my-2">Make your own Jumble</div>
        <div class="mb-3 col-12">
          <label for="jumble-name">Jumble Name</label>
          <input class="form-control" required name="name" type="text" minlength="3" maxlength="69" placeholder="give me a name i beg you....">
        </div>
        <div class="mb-3 col-12">
          <label for="jumble-here">Jumble</label>
          <input class="form-control" required name="jumble" type="text" minlength="3" maxlength="69000" placeholder="jumble here bro....">
        </div>
        <div class="mb-2 col-12 text-end">
          <button type="submit" class="btn btn-danger"><i class="mdi mdi-plus"></i>Submit</button>
        </div>
      </form>
      `
    }
}