require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const app = express()
const {} = require('./controller')

app.use(json())




app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.Port}`))