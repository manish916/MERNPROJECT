const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
import routes from './Routes'
app.use(cors())
app.use(express.json());
try {
    mongoose.connect('mongodb+srv://spyde:spyde916@cluster0.0tdxv.mongodb.net/HackersDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.once('open', () => {
        console.log('connected to db')
    })
    routes(app)

} catch (error) {
    console.log(error)
}

app.listen(process.env.PORT, () => { console.log('listening at 4000') })