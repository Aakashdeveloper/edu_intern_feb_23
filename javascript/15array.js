let a = [1,5,67,34,23] > Array of number
let b = ['Hii','Bie','Test'] > Array of string
let c = [true,true,false,true,false] > Array of Boolean

Array is a collection of homogenious data type as well as hetriogenious

let a = [1,5,67,"Hii","dsd",true,false,true,5]


var city = ["Delhi","Helsinki","Pune","Venice"]
city.length
4
city[0]
'Delhi'
city[1]
'Helsinki'
city[city.length-1]
'Venice'



var city = ["Delhi","Helsinki","Pune","Venice"]
undefined
city.push('London')
5
city
(5) ['Delhi', 'Helsinki', 'Pune', 'Venice', 'London']
city.push('Innsburg')
6
city
(6) ['Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']

var city = ['Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']
undefined
city.pop()
'Innsburg'
city
(5) ['Delhi', 'Helsinki', 'Pune', 'Venice', 'London']

city.pop(2)
'London'
city.pop(200000)
'Venice'

var city = ['Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']
undefined
city.unshift('Boston')
7
city
(7) ['Boston', 'Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']
city.shift()
'Boston'
city
(6) ['Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']


push > add in the end of array
pop > remove the last value of array
shift > remove the first value of array
unshift > Add as a first value to array

var city = ['Boston', 'Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']
city.slice(2,5)
(3) ['Helsinki', 'Pune', 'Venice']
city
(7) ['Boston', 'Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']
city.slice(2)
(5) ['Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']
city.slice(-2)
(2) ['London', 'Innsburg']
city.slice(2,-2)
(3) ['Helsinki', 'Pune', 'Venice']
city.slice(0,-1)
(6) ['Boston', 'Delhi', 'Helsinki', 'Pune', 'Venice', 'London']

//Splice(startIndex,deletecount,values)
var city = ['Boston', 'Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']

// remove 2 values from index 2
city.splice(2,2)
(2) ['Helsinki', 'Pune']
city
(5) ['Boston', 'Delhi', 'Venice', 'London', 'Innsburg']

// do not remove any value add values on index3
city.splice(3,0,'Hongkong','Mumbai')
[]
city
(7) ['Boston', 'Delhi', 'Venice', 'Hongkong', 'Mumbai', 'London', 'Innsburg']


var city = ['Boston', 'Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']
city.splice(4,1,'Mumbai','Indore')
['Venice']
city
['Boston', 'Delhi', 'Helsinki', 'Pune', 'Mumbai', 'Indore', 'London', 'Innsburg']


var city = ['Boston', 'Delhi', 'Helsinki', 'Pune', 'Venice', 'London', 'Innsburg']
undefined
city.indexOf('Delhi')
1
city.indexOf('Boston')
0
city.indexOf('Hongkong')
-1
city.indexOf('Edinburg')
-1
