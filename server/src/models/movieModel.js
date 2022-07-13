const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
  name:String,
  ratings:String,
  duration:String
})

const movieMessage = mongoose.model('movieMessage', movieSchema);
module.exports=movieMessage;