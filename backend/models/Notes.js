const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title : {
        type: String,
        require: true
    },
    decription : {
        type: String,
        default: "General"
    },
    tag: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes', NotesSchema);