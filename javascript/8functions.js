var a = 10;
var b = 20;
a+b;
30

keyword nameoffunction(parameter){
    keyword 
}

function add(a,b){
    return a+b
}
undefined
add(10,20)
30
add(20,12)
32
add(20)
NaN
add(201,11,12)
212
add(1,1)
2
add(1,1,1)
2
add("hi","JavaScript")
'hiJavaScript'

function myfun(a,b,c){
    return a+b+c
}

myfun(1,1,1)
3


function myfun(city,state){
    let out = `Form city ${city} abd State ${state}`
    return out
}
undefined
myfun('Panipat','Haryana')
'Form city Panipat abd State Haryana'


//es6
let sub = (a,b) => {return a-b}
sub(8,1)
7
sub(1,8)
-7

let sub = () => {}


///Rest es6

function add(...args){
    console.log(args)
}

add(8,2,11,87,16)
[8, 2, 11, 87, 16]