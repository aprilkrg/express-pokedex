Check out to a new branch
```bash
git checkout -b deliverable
```


Plan:
- solve deliverable for hw review on Wednesday
- add Tailwind css to project on Friday


Install packages on a cloned express project:
```bash
npm i
```


Run server to make sure everything is working
```bash
nodemon
```


Currently, project is styled with bootstrap. It's linked in `layout.ejs` in two scripts and one link. Get the functionality of the project working, and then you can play with the css. 


* As a user, I want to select my favorite Pokemon and add them to a list of favorites.


Right now, the link on the page sends json data on that pokemon, and clicking "Favorites" sends to a page rendering a string. The URL pattern for both is "/pokemon"


* As a dev, I want to click a button under the pokemon which will: add pokemon name to database, render a page that pulls back all rows from database.


## FOLLOW PART 1 IN README.MD

The development object in config.json:
```json
"development": {
    "database": "pokedex",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  }
```

## FOLLOW PART 2 IN README.MD

Create the model:
```bash
sequelize model:create --name pokemon --attributes name:string
```

Migrate changes to db:
```bash
sequelize db:migrate
```

Connect to database:
```sql
\c pokedex
```

See all relations:
```sql
\dt
```

Select all from table "pokemons":
```sql
SELECT * FROM pokemons;
```
which will show 4 columns: id, name, createdAt, updatedAt.


Create file to test the databse connection:
```bash
touch dbTest.js
```

Paste in data from readme and run:
```bash
node dbTest.js
```


## FOLLOW PART 3 IN README.MD

* As a dev, I want to: change the route "GET /pokemon" to query the database and return all pokemon that have been entered into the database (currently charizard and pikachu)

To change the "GET /pokemon" route:
- require models directory and save as variable
- change function to async/await
- query database and save as a variable
- pass saved data as "pokemon" in context object so ejs can use it without errors/changes


To change the "POST /pokemon" route:
- change function to async/await 
- write to database with .create()
- redirect to "/pokemon" to see the updated favorites


## FOLLOW PART 4 IN README.MD

- require axios package in routes/pokemon.js
- create new route to "GET /:name"
- save req.params.name to variable
- interpolate that variable into url
- get data with axios
- render show.ejs with axios data
- create show.ejs


### BONUSES FOR UX
- make link back to home page
- make button remove pokemon from favorites
    * npm i method-override
    * app.use(methodOverride("_method"))
- create favoritesIndex.ejs to display the favorites instead of reusing the index.ejs
    * change button so it doesn't double add to faves


## TAILWIND NOTES
display: `grid`
box-sizing: `box-border`

grid-column-start: `col-start-{grid-line=number}`
grid-column-end: `col-end-{grid-line=number}`
padding: `p-{size=number}`
border-radius: `rounded-{size=string}`
background-color: `bg-{color=string}-{opacity=number}`
color: `text-{color=string}`
font-size: `text-{size=string}`
flex space between horizontally: `space-x-{size=number}`
margin-top: `my-{size=number}`
margin-bottom: `mb-{size=number}`

my approach to learning something new:
* what do I already know? I know how to style a button; I wanna set the background color, font color, border radius, and hover effects of my btn => look up how to do exactly those things in tailwind documentation. I could get very overwhelmed by trying to learn it all before trying anything, and I could try to follow a tutorial that'll totally transform my page -- but I want to learn how it works by playing! start with a small piece, style it to satisfaction, and then go a piece bigger.



tailwind things to know:
- tree shakedown prevents useless css from being sent
- headers, li's are devoid of automatic style

have to think about the parent settings that will allow us to manipulate children


when playing with css, and something's not applying like I think it should, I try another value to see if it's doing anything at all