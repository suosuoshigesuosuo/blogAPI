var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const blogSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    text: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('blog', blogSchema);