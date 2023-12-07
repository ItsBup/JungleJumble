import { JumbleController } from "./controllers/JumbleController.js";

class App {

  JumbleController = new JumbleController()

}


const app = new App()
// @ts-ignore
window.app = app
