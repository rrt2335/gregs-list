import CarController from "./components/carController.js";
import JobController from "./components/jobController.js";
import HouseController from "./components/houseController.js";

class App {
    constructor() {
        this.controllers = {
            carController: new CarController(),
            jobController: new JobController(),
            houseController: new HouseController()
        }
    }
}

window.app = new App()