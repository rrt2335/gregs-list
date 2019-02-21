export default class Car {
    constructor(data) {
        this._id = data._id;
        this.make = data.make;
        this.model = data.model;
        this.imgUrl = data.imgUrl;
        this.year = data.year;
        this.price = data.price;
        this.description = data.description || '(No description provided)';
    }

    getTemplate() {
        return `
        <div class="card col-12 col-md-3">
            <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.year} ${this.make} ${this.model}</h5>
                <p class="card-text">${this.description} -- $${this.price}</p>
                <button onclick="app.controllers.carController.bidCar('${this._id}')">Bid $1</button>
                <button onclick="app.controllers.carController.deleteCar('${this._id}')">Remove</button>
            </div>
        </div>`
    }

}