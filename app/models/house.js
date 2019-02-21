export default class House {
    constructor(data) {
        this._id = data._id;
        this.bedrooms = data.bedrooms;
        this.bathrooms = data.bathrooms;
        this.price = data.price;
        this.levels = data.levels;
        this.imgUrl = data.imgUrl;
        this.year = data.year;
        this.description = data.description || '(No description provided)';
    }

    getTemplate() {
        return `
        <div class="card col-12 col-md-3">
            <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms, ${this.levels} levels</p>
                <p class="card-text">${this.description} -- $${this.price}</p>
                <button onclick="app.controllers.houseController.bidHouse('${this._id}')">Bid $1</button>
                <button onclick="app.controllers.houseController.deleteHouse('${this._id}')">Remove</button>
            </div>
        </div>`
    }
}