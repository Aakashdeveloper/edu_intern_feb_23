for
while
do while
for of >> Array
for in >> object

////////////////////////////////////////////////////////////////
> iterate over the array and can also generate the series of value

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Boston', 'Delhi', 'Venice', 'London', 'Innsburg']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

Boston
Delhi
Venice
London
Innsburg

////////////////////////////////////////////////////////////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

0
1
2
3
4


var i = 10
do{
    console.log(i);
    i++
}
while(i<5)
10


//////////////
var city = ['Boston', 'Delhi', 'Helsinki', 'Pune']
for(mycity of city){
    console.log(mycity)
}
Boston
Delhi
Helsinki
Pune
