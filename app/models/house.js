let id = 1

export default class House {
    constructor(data) {
        this.id = id;
        this.price = data.price;
        this.title = data.title;
        this.img = data.img;
        this.description = data.description || '(No description provided)';
        id++;
    }

    getTemplate() {
        return `
        <div class="card col-12 col-md-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description} -- $${this.price}</p>
                <button onclick="app.controllers.houseController.deleteHouse(${this.id})">Remove</button>
            </div>
        </div>`
    }
}