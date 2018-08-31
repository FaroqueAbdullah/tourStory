const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourplaceSchema = new Schema({
    placeName : String,
    placeLocation : String,
    placeDescription : String,
    placeImage : String
});

const TourPlace = mongoose.model('tourplace', tourplaceSchema);

module.exports = TourPlace;
