import CarController from "./components/car/carController.js";
import JobController from "./components/job/jobController.js";
import HouseController from "./components/house/houseController.js";

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