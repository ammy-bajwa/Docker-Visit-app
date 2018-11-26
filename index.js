// Getting dependencies
const express = require('express')
const redis = require('redis')

//Accessing process which will run this app
// const process = require('process')

//Initizing dependencies 
const app = express()
const redisClient = redis.createClient({
    host: 'redis-server',
    port: 6379
})

//Settting initial visits to 0 for redis 
redisClient.set('visits', 0)

app.get('/', (req, res) => {

    //Exit process that runs the app with code 0 to tell everything ok and we shutdown
    // process.exit(0);

    //Getting visits variable and sending it back
    redisClient.get('visits', (err, visits) => {
        if (err) res.json(err)
        res.send('Number of visits is ' + visits)

        //parsing visits in case visits not in int
        redisClient.set('visits', parseInt(visits) + 1)
    })
})

app.listen(8081, () => {
    console.log('server is up on port 4001')
})