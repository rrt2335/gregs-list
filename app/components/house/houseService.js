import House from "../../models/house.js";

// Creates an object to send requests from
let _housesApi = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses'
})


// PRIVATE
// STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
    houses: []
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
    bidHouse(id) {
        //find the house in our state with this id, use .find()
        let house = 
        //change the price of that car
        //then send a put request to the server
            //in the .then call getAllApiHouses()

    }
    getAllApiHouses(url = '') {
        _housesApi.get(url)
            // Happens after data comes back
            .then(response => {
                console.log(response)
                // All axios requests return 'data' in the response
                let houses = response.data.data.map(h => new House(h))
                setState('houses', houses)
            })
            .catch(err => {
                console.error(err)
            })
    }
}