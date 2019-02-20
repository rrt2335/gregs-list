import Job from "../../models/job.js";

// PRIVATE
// STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
    jobs: [
        new Job({ pay: 9000, title: 'Astronaut', img: 'https://www.careergirls.org/wp-content/uploads/2015/06/Astronaut_1920x1080-550x309.jpg', description: "You'll be a regular space cadet." }),
        new Job({ pay: 2000, title: 'Sous Chef', img: 'https://previews.123rf.com/images/vipdesignusa/vipdesignusa1111/vipdesignusa111100004/11108548-portrait-of-a-scared-chef-on-white-.jpg', description: "Try not to burn anything..." }),
        new Job({ pay: 50, title: 'Musician', img: 'https://www.cmuse.org/wp-content/uploads/2015/03/why-we-like-sad-music.jpg' })
    ]
}

// SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
// ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
// SUBSCRIBERS IS AN OBJECT OF ARRAYS OF FUNCTIONS
let _subscribers = {
    jobs: []
}

function setState(dataName, value) {
    _state[dataName] = value;
    // FOR EACH FUNCTION IN THE SUBSCRIBERS ENVOKE THE FUNCTION
    _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class JobService {
    addSubscriber(dataName, fn) {
        _subscribers[dataName].push(fn);
    }
    get Jobs() {
        return _state.jobs;
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
}