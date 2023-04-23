Map
> Map help to iterate over the array
> It always return the same length of output as input array
> it is use to apply the logics

var a = [4,5,23,12,34,2,7,47]
a.map(()=>{})
a.map((data) => {return data*2})
[8, 10, 46, 24, 68, 4, 14, 94]


var a = [4,5,23,12]
a.map((data) => {return `<p>${data*2}</p>`})
['<p>8</p>', '<p>10</p>', '<p>46</p>', '<p>24</p>']


filter
> help to filter out the values
> it may or may not return same length of output as input
> it only return those value for which your output or condition is true

var a = [4,5,23,12,34,2,7,47]
a.filter((data) => { return data>30})
[34, 47]

var a = [4,5,23,12,34,2,7,47]
a.map((data) => { return data>30})
[false, false, false, false, true, false, false, true]

var b = []
var a = [1,2,3]
a.map((data) => {return a.push(data*2)})
a
[1, 2, 3, 2, 4, 6]

var a = [0,1,2]
a.map((data) => {return data*2})
[0, 2, 4]

a.filter((data) => {return data*2})
[1, 2]