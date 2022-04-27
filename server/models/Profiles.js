const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  Name: String,
  Location: String,
  Description: String,
  pictures: [{name: String, url: String}],
  googleMaps: String,
  openingTimes: String,
  Facilities: [String],
  Geometry: {
    type: String,
    coordinates: [Number]
      }
});

mongoose.model("locations", profileSchema);
