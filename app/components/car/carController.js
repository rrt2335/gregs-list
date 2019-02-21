//Private

import CarService from "./carService.js";
let _cs = new CarService();

function drawCars() {
    let cars = _cs.Cars;
    let template = '';
    cars.forEach(car => {
        template += car.getTemplate();
    });
    document.getElementById('available-content').innerHTML = template;
}

function logCars() {
    console.log("The cars have been updated!");
}

// Public
export default class CarController {
    constructor() {
        _cs.addSubscriber('cars', drawCars);
        _cs.addSubscriber('cars', logCars);
        drawCars();
    }

    // IN ANY FORM SUBMISSION, DO NOT FORGET TO PREVENT THE DEFAULT ACTION
    addCar(event) {
        event.preventDefault();
        let form = event.target;
        let newCar = {
            title: form.title.value,
            price: form.price.value,
            description: form.description.value,
            img: form.img.value
        }
        _cs.addCar(newCar)
        // Clears the form
        form.reset();

    }
    deleteCar(id) {
        _cs.deleteCar(id);
    }

    bidCar(id) {
        _cs.bidCar(id)
    }

    getCars(url) {
        _cs.getAllApiCars(url)
    }
}