if(conditon){
    //if condition is true this part of logic will work
}else{
     //if condition is false this part of logic will work
}


if(conditon){
    //if condition is true this part of logic will work
}else if(conditon){
    
}
else{
     //if condition is false this part of logic will work
}

var a = 10;
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}

VM41:3 10 is even
undefined
var a = 11;
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}

VM50:5 11 is odd


var a = 9;
if(a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} is divisble by 3`)
}
else{
    console.log(`${a} is odd`)
}

var a = 9;
if(a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} is divisble by 3`)
}
else{
    console.log(`${a} is odd`)
}
9 is divisble by 3
undefined
var a = 5;
if(a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} is divisble by 3`)
}
else{
    console.log(`${a} is odd`)
}
VM68:8 5 is odd

////ternary operator
(single line if else)

condition ? if condition is true : if condition is false

var a = 10;
a>10 ? "Hiii":"Biee"

'Biee'
var a = 10;
a==10 ? "Hiii":"Biee"

'Hiii'

var a = 10;
a==10 ? a+1:a-1

11
var a = 10;
a>10 ? a+1:a-1

9
