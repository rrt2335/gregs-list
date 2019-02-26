const router = require('express').Router();

let houses = [{
    bedrooms: "Hyundai",
    bathrooms: "Elantra",
    price: 2019,
    levels: 3000,
    year: 1999,
    description: "This is my house."
}, {
    make: "Ford",
    model: "Focus",
    year: 2010,
    price: 1500,
    description: "A standard vehicle."
}]

// GetAllHouses
router.get('', (req, res, next) => {
    res.status(200).send(houses)
})

// Get one by Id (index)
router.get('/:id', (req, res, next) => {
    let house = houses[req.params.id]
    if (!house) {
        return res.status(400).send(`<h1>There is no house at that ID.</h1>`)
    }
    res.status(200).send(house)
})

router.post('', (req, res, next) => {
    // Request body is the object sent from the client
    let newHouse = request.body;
    houses.push(newHouse)
    res.status(201).send(newHouse)
})

router.delete('/:id', (req,res,next)=> {
    if (req.params.id > -1 && req.params.id < houses.length) {
        houses.splice(req.params.id, 1)
        res.status(400).send('Deleted house!')
    }
    res.status(400).send(`<h1>There is no house at that ID.</h1>`)
})

module.exports = router