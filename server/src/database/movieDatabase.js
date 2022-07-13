const mongoose = require("mongoose");
const db =("mongodb+srv://<username>:<password>@clustermovies.elqqa.mongodb.net/?retryWrites=true&w=majority");


const connectDB = async()=>{
  try{
    await mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
   
  }catch(err){
    console.log(err.message) ;
    process.exit(1)
  }
}
module.exports = connectDB;
