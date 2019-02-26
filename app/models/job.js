export default class Job {
    constructor(data) {
        this._id = data._id;
        this.jobTitle = data.jobTitle
        this.company = data.company
        this.hours = data.hours
        this.wage = data.wage
        this.description = data.description || '(No description provided)';
    }

    getTemplate() {
        return `
        <div class="card col-12 col-md-3">
            <div class="card-body">
                <h5 class="card-title">${this.jobTitle}</h5>
                <p class="card-text">${this.description} -- $${this.wage}/hr</p>
                <button onclick="app.controllers.jobController.applyJob(${this.id})">Apply</button>
                <button onclick="app.controllers.jobController.deleteJob(${this.id})">Remove</button>
            </div>
        </div>`
    }
}