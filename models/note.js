const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    text: {type: String,  require: true},
    user: {type: Schema.Types.ObjectId, require: true}
})

module.exports = mongoose.model('Note', noteSchema);