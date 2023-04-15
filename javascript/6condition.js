// all the conditional operator will return boolean output;
/* */
= // assignment
== //comapre the data
=== //comapre the data and datatype

var a = 10
var b = "10"
var c = 20

a == b  // compare the data
true
a === b // compare the data & datatype
false
a == c // data does not match
false
a === c
false

var a = "Hi"
var b = "hi"

a == b
false

10 > 5
true
10 < 5
false
10 !== 5
true
10 >= 5
true
10 => 5
VM364:1 Uncaught SyntaxError: Malformed arrow function parameter list
10 <= 5
false

// negation//
var a = true
undefined
!a
false
var b = false
undefined
!b
true

var a = 1
!a
false
var b = 0
!b
true

var a = "Hi"
!a
false

var a = -1
!a
false

var a = null
!a
true


truthy > Any number except 0 weather +ve or -ve, true , any string
falsy > 0, false, null, undefined