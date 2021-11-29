const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/agremiacoes', async(req, res) => {
    
    try {
        //   response
    const {data} = await axios('https://api-turistar.herokuapp.com/agremiacoes/')

    return res.json(data)

    } catch (error) {
        console.error(error)
    }

})

app.listen('1000')