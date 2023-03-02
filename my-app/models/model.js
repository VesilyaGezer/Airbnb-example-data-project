const mongoose = require("../database");
 
// create an schema
var userSchema = new mongoose.Schema({
    _id: String,
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    description: String,
    neighborhood_overview: String,
    notes: String,
    transit: String,
    access: String,
    interaction: String,
    house_rules: String,
    property_type: String,
    room_type: String,
    bed_type: String,
    minimum_nights: String,
    maximum_nights: String,
    cancellation_policy: String,
    last_scraped: Mixed,
    calendar_last_scraped:Mixed,
    first_review:Mixed ,
    last_review: Mixed,
    accommodates: Number,
    bedrooms: Number,
    beds: Number,
        });
 
var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("Users", userModel);