// create empty object so we can add properties, which are functions
const cntlr = {}

// GET /pokemon/pikachu 
cntlr.showOne = async(req,res) => {
    // log in server terminal when this function is invoked
    console.log("show one cntlr")
    // send the name parameter from the url
    res.send(req.params.nameParam)
}

// TODO
// DELETE /pokemon/pikachu

// export the module
module.exports = cntlr