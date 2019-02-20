//Private

import JobService from "./jobService.js";
let _js = new JobService();

function draw() {
    let jobs = _js.Jobs;
    let template = '';
    jobs.forEach(job => {
        template += job.getTemplate();
    });
    document.getElementById('available-content').innerHTML = template;
}

function logJobs() {
    console.log("The jobs have been updated!");
}

//Public
export default class JobController {
    constructor() {
        _js.addSubscriber('jobs', draw);
        _js.addSubscriber('jobs', logJobs);
        draw();
    }

    // IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
    addJob(event) {
        event.preventDefault();
        let form = event.target;
        let newJob = {
            title: form.title.value,
            pay: form.pay.value,
            description: form.description.value,
            img: form.img.value
        }
        _js.addJob(newJob)
        // Clears the form
        form.reset();

    }
    deleteJob(id) {
        _js.deleteJob(id);
    }

    getJobs(url) {
        _js.getAllApiJobs(url)
    }

}