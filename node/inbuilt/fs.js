let fs = require('fs');

/*
// write file
fs.writeFile('myFile.txt','This is code sample',function(){
    console.log('File Created')
})
*/

// append file
// fs.appendFile('myCode.txt','My Code for append \n',function(){
//     console.log('File Appended')
// })

//readfile
// fs.readFile('myLoc.json','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

//rename
// fs.rename('myFile.txt','myData.txt',function(err){
//     if(err) throw err;
//     console.log('File Renamed')
// })


fs.unlink('myData.txt',(err)=>{
    if(err) throw err;
    console.log('File Delete')
})