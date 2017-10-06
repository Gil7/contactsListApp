const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/database')
const cors = require('cors')
const path = require('path')
const app = express()
const routes = require('./routes/routes')

//config the port to listen request
const port = process.env.PORT || 3000

//connection to the db
mongoose.connect(config.database, { useMongoClient: true })
mongoose.connection.on('connected', () => {
    console.log(`Connected to : ${config.database}`)
})
mongoose.connection.on('error', (err) => {
    if(err){
        console.log(`Erro in connection:  ${err}`)
    }
})
//Body parser - Middleware 
app.use(bodyParser.json())
//CORS - Middleware
app.use(cors())
//static files
app.use(express.static(path.join(__dirname,"public")))
//routes for the app
app.use('/api',routes)

app.get('*', (req, res) => {
    res.redirect('/')
})

//open the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})