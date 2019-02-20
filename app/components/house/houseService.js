import House from "../../models/house.js";

// PRIVATE
// STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
    houses: [
        new House({ price: 10000000, title: 'An Utter Mansion', img: 'https://media.bizj.us/view/img/10977377/ccm0509-2*750xx7312-4113-0-235.jpg'}),
        new House({ price: 240000, title: 'Balloon House', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6lq2tAR_JsHVA0DdoHpuT3r6RUfSJfwyKuzzKnb8V6jEiklYE', description: "Buy now! Prices are sure to inflate!" }),
        new House({ price: 100, title: 'Flimsy Tree Residence', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpolR-9Qt0tVsQFnmEnbzj6SEJWPUGSzbBeJ6SpB72WjIPM03nw', description: "You need to branch out more." })
    ]
}

// SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
// ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
// SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
    houses: [],
}

function setState(dataName, value) {
    _state[dataName] = value;
    // FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
    _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class HouseService {
    addSubscriber(dataName, fn) {
        _subscribers[dataName].push(fn);
    }
    get Houses() {
        return _state.houses;
    }
    addHouse(rawHouse) {
        let newHouse = new House(rawHouse);
        _state.houses.push(newHouse);
        setState('houses', _state.houses);
    }
    deleteHouse(id) {
        for (let i = 0; i < _state.houses.length; i++) {
            let house = _state.houses[i];
            if (house.id == id) {
                _state.houses.splice(i, 1);
                break;
            }
        }
        setState('houses', _state.houses);
    }
}