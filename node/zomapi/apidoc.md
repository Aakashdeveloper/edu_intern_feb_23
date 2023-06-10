* Zomato App

// page1
> List of city
* https://internmay.onrender.com/location

> Rest wrt to city
* http://localhost:9120/restaurants?stateId=3

* https://internmay.onrender.com/restaurants?stateId=3

> List of Quick Search
* http://localhost:9120/mealType
* https://internmay.onrender.com/mealType

//page2
> Rest wrt to mealtype
* http://localhost:9120/restaurants?mealId=4
* http://localhost:9120/restaurants?stateId=1&mealId=2

> Rest wrt to mealtype + cuisine
* http://localhost:9120/filter/1?cuisineId=2

> Rest wrt to mealtype + cost
* http://localhost:9120/filter/1?lcost=400&hcost=1000

//Page3
> Details of Restaurant
* http://localhost:9120/details/64721c6faca8e9e0294f0067
> Menu of restaurant
* http://localhost:9120/menu/10


//Page4
> Details of Menu selected
* http://localhost:9120/menuDetails
 {"id":[4,8,21,9]}

> Place Order
*  http://localhost:9120/placeOrder
{
	"orderId" : 2,
	"name" : "Amit",
	"email" : "amit@gmail.com",
	"address" : "Hom 65",
	"phone" : 8934645457,
	"cost" : 612,
	"menuItem" : [
		45,
		34,
		41
	],
	"status" : "Delivered"
}


// Page5
> List of all the orders
* http://localhost:9120/orders

> Update orders details
* http://localhost:9120/updateOrder
{
    "_id":"647c9ef070ab7d9b545a4090",
    "status":"Out for delivery"
}

> Delete Orders
* http://localhost:9120/deleteOrder
{"_id":"647c9f2e36e6ecf8fde6722b"}