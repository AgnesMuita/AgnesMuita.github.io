const {Mongoose } = require("mongoose");
const movieMessage = require("../models/movieModel")

const createMovie = async(req,res)=>{
  const movie = req.body;
  const newMovie = new movieMessage(movie)
  try{
   const dataSave = await newMovie.save();
    res.status(201).json(dataSave)
  }catch(err){
    res.status(404).send({status:400, data:{err:err?.message||error}})
  }
}

const getAllMovies = async (req,res)=>{
  try{
    const allMovies = await movieMessage.find();
    res.status(200).json({data:allMovies})
  }catch(err){
    throw({status:500,message:err})
  }
}

const getOneMovie = async(req,res)=>{
    const oneMovie = await movieMessage.findById(req.params.id)
    res.status(200).json({data:oneMovie})
}
const getMovieByName = async(req,res)=>{
    const movieName = await movieMessage.find(req.params.name)
    res.status(200).send(movieName)
}

module.exports = {createMovie, getAllMovies, getOneMovie, getMovieByName};