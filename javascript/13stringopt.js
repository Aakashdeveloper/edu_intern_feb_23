var city = "aMsTErdAm"

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city.length
9


city[0]
'a'
city[1]
'M'
city.charAt(0)
'a'
city.charAt(1)
'M'
city.charAt(-1)
''
city.at(1)
'M'
city.at(-1)
'm'

var a = "John"
var b = "john"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amSterdAm"

city.slice(1)
'mSterdAm'
city.slice(2)
'SterdAm'
city.slice(-1)
'm'
city.slice(-2)
'Am'
city.slice(0,1)
'a'
city.slice(2,5)
'Ste'
city.slice(0,-1)
'amSterdA'
city.slice(0,-2)
'amSterd'
city.slice(2,-2)
'Sterd'
city.slice(-2,2)
''

var city = "amSterDaM";
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "paRiS";
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'


var uname = "   Nikita.  "
undefined
uname.length
12
uname.trim()
'Nikita.'
var uname = "   Nikita .  "
undefined
uname.trim()
'Nikita .'
var a = "i am learning javascript"

a.replace('javascript','js')
'i am learning js'

var a = "javascript i am learning javascript"
a.replace('javascript','js')
'js i am learning javascript'

var a = "javascript i am learning javascript"
a.replace(/javascript/g,'js')
'js i am learning js'

a.replaceAll('javascript','js')
'js i am learning js'

var uname = "   Nikita .  "
uname.replaceAll(' ','')
'Nikita.'


var a = "i am learning javascript"
a.split(' ')
(4) ['i', 'am', 'learning', 'javascript']
var a = "javascript"
a.split('')
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
var b =  ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
b.join()
'j,a,v,a,s,c,r,i,p,t'
b.join().replaceAll(',','')
'javascript'
