// PRIVATE
import Job from "../../models/job.js";

// Creates an object to send requests from
let _jobsApi = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs'
})

// STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
    jobs: []
}

// SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
// ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
// SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
    jobs: []
}

function setState(dataName, value) {
    _state[dataName] = value;
    // FOR EACH FUNCTION IN THE SUBSCRIBERS, ENVOKE THE FUNCTION
    _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class JobService {
    addSubscriber(dataName, fn) {
        _subscribers[dataName].push(fn);
        this.getAllApiJobs()
    }
    get Jobs() {
        return _state.jobs.map(j => new Job(j));
    }
    addJob(rawJob) {
        let newJob = new Job(rawJob);
        _state.jobs.push(newJob);
        setState('jobs', _state.jobs);
    }
    deleteJob(id) {
        for (let i = 0; i < _state.jobs.length; i++) {
            let job = _state.jobs[i];
            if (job.id == id) {
                _state.jobs.splice(i, 1);
                break;
            }
        }
        setState('jobs', _state.jobs);
    }

    getAllApiJobs(url = '') {
        _jobsApi.get(url)
            // Happens after data comes back
            .then(response => {
                console.log(response)
                // All axios requests return 'data' in the response
                let jobs = response.data.data.map(j => new Job(j))
                setState('jobs', jobs)
            })
            .catch(err => {
                console.error(err)
            })
    }
}