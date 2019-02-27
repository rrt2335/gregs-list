const router = require('express').Router();

let cars = [{
    make: "Hyundai",
    model: "Elantra",
    year: 2019,
    price: 3000,
    description: "This is my car.",
    imgUrl: "https://www.hyundaiusa.com/images/vehicles/pages/vlp/2019/elantra/vlp/compare-jellies/2019-elantra-se-symphony-silver.png"
}, {
    make: "Ford",
    model: "Focus",
    year: 2010,
    price: 1500,
    description: "A standard vehicle.",
    imgUrl: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USC50FOC122B021001.jpg"
}]

// GetAllCars
router.get('', (req, res, next) => {
    res.status(200).send(cars)
})

// Get one by Id (index)
router.get('/:id', (req, res, next) => {
    let car = cars[req.params.id]
    if (!car) {
        return res.status(400).send(`<h1>There is no car at that ID.</h1>`)
    }
    res.status(200).send(car)
})

router.post('', (req, res, next) => {
    // Request body is the object sent from the client
    let newCar = request.body;
    cars.push(newCar)
    res.status(201).send(newCar)
})

router.delete('/:id', (req,res,next)=> {
    if (req.params.id > -1 && req.params.id < cars.length) {
        cars.splice(req.params.id, 1)
        res.status(400).send('Deleted car!')
    }
    res.status(400).send(`<h1>There is no car at that ID.</h1>`)
})

module.exports = router