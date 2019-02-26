// This is the same every time!
let express = require('express')
let bp = require('body-parser')

// Create express application, instantiates an instance of 'express'
let server = express()
let port = 3000


// Middleware
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


// Routes
let carRoutes = require('./server-assets/routes/car-routes')
let jobRoutes = require('./server-assets/routes/job-routes')
let houseRoutes = require('./server-assets/routes/house-routes')


server.use('/api/cars', carRoutes)
server.use('/api/jobs', jobRoutes)
server.use('/api/houses', houseRoutes)


// Catch-all
server.use('', (req, res, next) => {
    res.status(404).send('No matching routes. Please check your request.')
})


// Start server
server.listen(3000, () => {
    console.log(`Server is running on port: ${port}`)
})