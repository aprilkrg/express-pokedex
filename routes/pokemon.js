const express = require('express');
const router = express.Router();

// TODO
// require axios package and models directory
const axios = require("axios")
const db = require("../models")


// NOTE
// import controller directory
const controller = require("../controllers")

// GET /pokemon - return a page with favorited Pokemon
router.get('/', async (req, res) => {
  // TODO: - refactor to try/catch block, Get all records from the DB and render to view
  const pokemonFromDb = await db.pokemon.findAll()
  console.log(pokemonFromDb)
  const context = {
    pokemon: pokemonFromDb,
    title: "Favorite Pokemon"
  }
  // res.send("favorite page");
  res.render("pokemon/index.ejs", context)
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', async (req, res) => {
  // TODO: Get form data and add a new record to DB
  // find or create to avoid doubling of pokemons in fave list vs. find which will create duplicates
  const favePokemon = await db.pokemon.findOrCreate({
    where: {
      name: req.body.name
    }
  })
  res.redirect("/pokemon")
});

// NOTE
// implement an mvcr structure -> models (database) views (html) controllers (functions) routes (HTTP & URL)

// NOTE
// GET /pokemon/pikachu - render show page with pokemon data from api
router.get("/:nameParam", controller.showOne)

// NOTE
// DELETE /pokemon/pikachu - delete pokemon from db and redirect to all faves
router.delete("/:name", controller.deleteOne)

module.exports = router;
