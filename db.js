const { MongoClient } = require('mongodb')

let dbConnection

let uri = '' #Mongo DB URI

module.exports = {
    connectToDB : (cb) => {
        //MongoClient.connect('mongodb://localhost:27017/bookstore') // uncommment for local connection
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDB: () => dbConnection
}
