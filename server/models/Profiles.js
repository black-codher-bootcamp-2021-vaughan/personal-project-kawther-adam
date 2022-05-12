const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  Name: String,
  Location: String,
  Postcode: String,
  Description: String,
  pictures: [{name: String, url: String}],
  Geometry: {
    Latitude: Number,
    Longitude: Number,
 }
});

mongoose.model("locations", profileSchema);
