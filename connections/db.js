let mongoose = require('mongoose')
let URI = "" // Add your connection string

let connectdb = async () => {
    try {
        let con = await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`Connected to ${URI}`)
    }
    catch (err) {
        console.log(err)
    }
}

// connectdb()
module.exports = connectdb
