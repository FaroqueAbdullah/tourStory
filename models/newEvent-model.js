const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventTitle : String,
    eventLocation : String,
    eventDescription : String,
    blogAuthorId : String,
    blogAuthor : String,
    blogAuthorName : String,
    blogAuthorThumbnil : String,
    email : String
});

const NewEvent = mongoose.model('newevent', eventSchema);

module.exports = NewEvent;
