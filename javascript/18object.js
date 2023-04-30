var a = {}  // Object
var b = []  // array

var moviename = "Jab We met"
var movierating = 4.7
var movInd = "Bollywood"

var moviename1 = "Avengers"
var movierating1 = 4.2
var movInd1 = "Hollywood"

var movie = {
    name:'Jab We Met',
    rating:4.7,
    ind:"Bollywood"
}

movie.name
'Jab We Met'
movie.rating
4.7
movie.rating = 4.9
4.9
movie.type = "Romantic"
'Romantic'
movie
{name: 'Jab We Met', rating: 4.9, ind: 'Bollywood', type: 'Romantic'}
delete movie.ind
true
movie
{name: 'Jab We Met', rating: 4.9, type: 'Romantic'}

movie['name']
'Jab We Met'

JSON > Javascript Object Notation
> Array of object
> Key value pair of data

var movies = [
    {
        "name":"Jab We Met",
        "rating":4.7,
        "ind":"Bollywood"
    },
    {
        "name":"Avengers",
        "rating":4.3,
        "ind":"Hollywood"
    }
]

movies[1].name
'Avengers'
movies[0].ind
'Bollywood'

movies.map((data)=>{return data.name})
(2) ['Jab We Met', 'Avengers']

for(i=0;i<movies.length;i++){
    console.log(movies[i].name)
}
Jab We Met
 Avengers

var movie =  {
    "name":"Jab We Met",
    "rating":4.7,
    "ind":"Bollywood"
}


for(key in movie){
    console.log(key)
}

name
rating
ind

for(key in movie){
    console.log(movie[key])
}

Jab We Met
4.7
Bollywood