//Private
import HouseService from "./houseService.js";

let _hs = new HouseService();

function drawHouses() {
    let houses = _hs.Houses;
    let template = '';
    houses.forEach(house => {
        template += house.getTemplate();
    });
    document.getElementById('available-content').innerHTML = template;
}

function logHouses() {
    console.log("The houses have been updated!");
}

//Public

export default class HouseController {
    constructor() {
        _hs.addSubscriber('houses', drawHouses);
        _hs.addSubscriber('houses', logHouses);
        drawHouses();
    }

    // IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
    addHouse(event) {
        event.preventDefault();
        let form = event.target;
        let newHouse = {
            title: form.title.value,
            price: form.price.value,
            description: form.description.value,
            img: form.img.value
        }
        _hs.addHouse(newHouse)
        // Clears the form
        form.reset();

    }
    deleteHouse(id) {
        _hs.deleteHouse(id);
    }
    bidHouse(id) {
        _hs.bidHouse(id)
    }
    getHouses(url) {
        _hs.getAllApiHouses(url)
    }

}