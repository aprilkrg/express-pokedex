const { default: axios } = require("axios")

// create empty object so we can add properties, which are functions
const cntlr = {}

// GET /pokemon/pikachu 
cntlr.showOne = async(req,res) => {
    // log in server terminal when this function is invoked
    console.log("show one cntlr")
    // send the name parameter from the url
    
    const nameForApi = req.params.nameParam
    const url = `http://pokeapi.co/api/v2/pokemon/${nameForApi}` 
    const apiResponse = await axios.get(url)
    console.log(apiResponse.data)
    // res.send(req.params.nameParam)
    res.render("pokemon/show.ejs", {pokemon: apiResponse.data})
}

// TODO
// DELETE /pokemon/pikachu

// export the module
module.exports = cntlr