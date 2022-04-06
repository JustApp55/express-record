const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema(
    {
    albumTitle: String,
    artist: String,
    coverArt: String,
    year: Number,
    genre: String

})

const Records = mongoose.model('Record', recordSchema)

module.exports = Records
