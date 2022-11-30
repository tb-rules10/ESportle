let mongoose = require('mongoose')
let URI = "mongodb+srv://esportle:UjhOHC3N6ni2KLmC@cluster0.yg9q4e3.mongodb.net/?retryWrites=true&w=majority"

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