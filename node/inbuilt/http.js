let http = require('http');

//req > what we send to server(params,quer,body)
//res > what server send us

let server = http.createServer((req,res)=>{
    res.write('Hi from http server code')
    res.end()
})

server.listen(3210)

//http://localhost:3211/
//http://127.0.0.1:3211/