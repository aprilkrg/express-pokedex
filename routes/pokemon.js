const express = require('express');
const router = express.Router();

// TODO
// require axios package and models directory

// NOTE
// import controller directory
const controller = require("../controllers")

// GET /pokemon - return a page with favorited Pokemon
router.get('/', (req, res) => {
  // TODO: Get all records from the DB and render to view
  res.send('Render a page of favorites here');
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', (req, res) => {
  // TODO: Get form data and add a new record to DB
  res.send(req.body);
});

// NOTE
// implement an mvcr structure -> models (database) views (html) controllers (functions) routes (HTTP & URL)

// NOTE
// GET /pokemon/pikachu - render show page with pokemon data from api
router.get("/:nameParam", controller.showOne)

// NOTE
// DELETE /pokemon/pikachu - delete pokemon from db and redirect to all faves

module.exports = router;
