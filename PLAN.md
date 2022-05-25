<!-- 
NOTE:
* comment anchors is an extension
* turn on word wrap
* show branches, chance to grab code is later, chance to watch and ask questions is now
* cover mvcr again
 -->

Follow README Part 1-3

Part 4:
<!-- TODO create ejs for pokemon show page -->
- create show.ejs
- copy form from index.js, change action to include name param and method override, change button text
- loop over abilities and moves, creating a new li element for each one
- include an img whose src is one of the sprite imgs, like front_default

<!-- TODO create routes that pair: method + url pattern => controller -->
- create controller folder
- create dinoCntrlr file
    * in controller, create functions and export file
- create index.js file in controller directory
    * in controller, require dinoCntlr and module.exports it
- in routes, import controller and assign function to route method + url pattern

<!-- TODO expand api request limit to 151 -->