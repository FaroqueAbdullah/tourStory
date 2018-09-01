const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourplaceSchema = new Schema({
    placeName : String,
    placeLocation : String,
    placeImage : String,
    placeDescription : String

});

const TourPlace = mongoose.model('tourplace', tourplaceSchema);

module.exports = TourPlace;
