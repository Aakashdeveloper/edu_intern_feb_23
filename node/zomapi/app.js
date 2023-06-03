let express = require('express');
let app = express();
let port = 9120;
let Mongo = require('mongodb')
let {dbConnect,getData} = require('./controller/dbController')

app.get('/',(req,res) => {
    res.send('Hiii From express')
})

// get all location
app.get('/location',async (req,res)=>{
    let query = {};
    let collection = "location"
    let output = await getData(collection,query)
    res.send(output)
})

//get all mealType
app.get('/mealType', async (req,res) => {
    let query = {};
    let collection = "mealType";
    let output = await getData(collection,query);
    res.send(output)
})

app.get('/restaurants', async(req,res) => {
    let query = {}
    if(req.query.stateId && req.query.mealId){
        query={state_id: Number(req.query.stateId),"mealTypes.mealtype_id": Number(req.query.mealId)}
    }
    else if(req.query.stateId){
        query={state_id: Number(req.query.stateId)}
    }
    else if(req.query.mealId){
        query={"mealTypes.mealtype_id": Number(req.query.mealId)}
    }
    else{
        query = {}
    }
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
})

app.get('/filter/:mealId', async(req,res) => {
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId)
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    if(cuisineId){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    } else if(lcost && hcost){
        query = {
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
})

// details
app.get('/details/:id', async(req,res) => {
    let id = new Mongo.ObjectId(req.params.id)
    let query = {_id:id}
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
})
// let id = Number(req.params.id);
// let query = {restaurant_id:id}

app.get('/menu/:id',async(req,res) => {
    let id = Number(req.params.id);
    let query = {restaurant_id:id};
    let collection = "menu";
    let output = await getData(collection,query);
    res.send(output)
})

//orders
app.get('/orders',async(req,res) => {
    let email = req.query.email;
    if(email){
        query={email:email}
    }
    let query = {};
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output)
})



app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})

