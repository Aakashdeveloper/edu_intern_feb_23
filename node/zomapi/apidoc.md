* Zomato App

// page1
> List of city
* http://localhost:9120/location

> Rest wrt to city
* http://localhost:9120/restaurants?stateId=3

> List of Quick Search
* http://localhost:9120/mealType

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
> Place Order

// Page5
> List of all the orders
* http://localhost:9120/orders

> Update orders details
> Delete Orders