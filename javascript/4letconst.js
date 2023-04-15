var >  we can redeclare and reassign
let  > we cannot redcalare but can reassign
const > we cannot redcalare nor reassign

var a = 10;

var a >>>>> declare
a = 10 >> assignment

> var a = 10
> a
10
> var a = 20
> a
20
> a = 30
30
> a
30


> let c = 20
> c
20
> let c = 30
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 30
30


> const d = 10
> const d = 11
Uncaught SyntaxError: Identifier 'd' has already been declared
> d = 11
Uncaught TypeError: Assignment to constant variable.