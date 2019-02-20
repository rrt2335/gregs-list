// PRIVATE
import Car from "../../models/car.js";

// Creates an object to send requests from
let _carsApi = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars'
})

// STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
    cars: []
}

// SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
// ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
// SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
    cars: [],
} 

function setState(dataName, value) {
    _state[dataName] = value;
    // FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
    _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class CarService {
    addSubscriber(dataName, fn) {
        _subscribers[dataName].push(fn);
    }
    get Cars() {
        return _state.cars;
    }
    addCar(rawCar) {
        let newCar = new Car(rawCar);
        _state.cars.push(newCar);
        setState('cars', _state.cars);
    }
    deleteCar(id) {
        for (let i = 0; i < _state.cars.length; i++) {
            let car = _state.cars[i];
            if (car.id == id) {
                _state.cars.splice(i, 1);
                break;
            }
        }
        setState('cars', _state.cars);
    }
    bidCar(id) {
        for (let i = 0; i < _state.cars.length; i++) {
            let car = _state.cars[i];
            car.price++;
                break;
            }
        
        setState('cars', _state.cars);
    }
    getAllApiCars(url = '') {
        _carsApi.get(url)
            // Happens after data comes back
            .then(response => {
                console.log(response)
                // All axios requests return 'data' in the response
                let cars = response.data.data.map(c => new Car(c))
                setState('cars', cars)
            })
            .catch(err => {
                console.error(err)
            })
    }
    
}