const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const personRoutes = require('./Routes/Person')

const app = express()

// middleware
app.use(cors())
app.use(express.json())

//Routes
app.use('/person', personRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('db connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))
