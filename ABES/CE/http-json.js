const http = require('http');
const fs=require('fs/promises');
// const users=[{
//     id:1,
//     name:'Rahul',
//     email:'rahul@gmail.com'
// },
// {
//     id:2,
//     name:'Raj',
//     email:'raj@gmail.com'
// },
// {
//     id:3,
//     name:'Ram',
//     email:'ram@gmail.com'
// }]

const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'Conetnt-Type':'application/json'});
    const filedata = await fs.readFile("./aa.json",'utf8')
    const parsedata = JSON.parse(filedata);
    res.end(JSON.stringify(parsedata));
    // const newdata=users.map((user)=>{
    //     return user.name
    // });
    // let newdata="";
    // users.forEach((user)=>{
    //     newdata += `${user.name}`;
    // });
    res.end(filedata);

});
PORT=3000;
server.listen(PORT, ()=>{
    console.log(`server is running port ${PORT}`);
})