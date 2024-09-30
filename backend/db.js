const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/?directConnection=true&tls=false&readPreference=primary"


const connectToMongoDB = () => {
    mongoose.connect(mongoURI)
}

module.exports = connectToMongoDB