import CarController from "./components/carController.js";

class App {
    constructor() {
        this.controllers = {
            carController: new CarController()
        }
    }
}

window.app = new App()