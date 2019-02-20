let id = 1;

export default class Job {
    constructor(data) {
        this.id = id;
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.hours = data.hours
        this.rate = data.rate
        this.description = data.description || '(No description provided)';
        id++;
    }

    getTemplate() {
        return `
        <div class="card col-12 col-md-3">
            <div class="card-body">
                <h5 class="card-title">${this.jobTitle}</h5>
                <p class="card-text">${this.description} -- $${this.rate}/hr</p>
                <button onclick="app.controllers.jobController.applyJob(${this.id})">Apply</button>
                <button onclick="app.controllers.jobController.deleteJob(${this.id})">Remove</button>
            </div>
        </div>`
    }
}