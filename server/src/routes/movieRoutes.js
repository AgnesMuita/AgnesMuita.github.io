const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController")

router.post("/",movieController.createMovie )
router.get("/", movieController.getAllMovies)
router.get("/:id", movieController.getOneMovie)
// router.get("/name", movieController.getMovieByName)


module.exports = router;