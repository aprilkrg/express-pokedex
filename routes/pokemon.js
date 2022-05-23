const express = require('express');
const router = express.Router();
const db = require("../models")
const axios = require('axios'); 

// GET /pokemon - return a page with favorited Pokemon
router.get('/', async (req, res) => {
  // res.send('Render a page of favorites here');
  // TODO: Get all records from the DB and render to view
  const pokemonFromDb = await db.pokemon.findAll()
  res.render("index.ejs", {pokemon: pokemonFromDb})
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', async (req, res) => {
  // res.send(req.body);
  // TODO: Get form data and add a new record to DB
  const newFave = await db.pokemon.create({
    name: req.body.name
  })
  res.redirect("/pokemon")
});

// GET /pokemon/:name - render show page with pokemon data
router.get("/:name", async(req,res) => {
  // look at the req.params to see pokemon name
  // res.json(req.params)
  // save req.params to variable
  const nameParam = req.params.name
  // interpolate name into pokemon api url
  const url = `http://pokeapi.co/api/v2/pokemon/${nameParam}/`
  // send axios request
  const apiResponse = await axios.get(url)
  // console.log(apiResponse.data)
  const pokemonForShow = apiResponse.data
  // console.log(pokemonForShow.moves, 'pokemon data <<<<')
  res.render("show.ejs", {pokemon: pokemonForShow})
})

// DELETE /pokemon/:name - delete pokemon data from db
router.delete("/:name", async (req,res) => {
  console.log("deleted")
  db.pokemon.destroy({where: {
    name: req.params.name
  }})
  const pokemonFromDb = await db.pokemon.findAll()
  res.render("index.ejs", {pokemon: pokemonFromDb})
})

module.exports = router;
