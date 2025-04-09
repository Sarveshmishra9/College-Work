const express=require('express'); // keyword integrate krta hai page ko
//const path=require('path');
const app=express();
const port=3000;

app.use(express.json());//middleware -- body is undefined ko remove
// const adi=[{       //[{}] -- json array createion
//     name:"sarvesh"
// }]

// app.get('/',(req,res)=>{    // '/' create routes and get means server send data to client ----'/'simple api and '/api'restful api
//     res.send("this is my home page");

// })
// app.get('/home',(req,res)=>{    // '/' create routes and get means server send data to client
//     //res.send("this is my about page");
//     //res.json(adi);
//     res.sendFile(path.join(__dirname,"home.html")); //home.html page ko express(index.js) se add

// })
// app.get('/aboutus',(req,res)=>{    // '/' create routes and get means server send data to client
//     res.sendFile(path.join(__dirname,"aboutus.html"));

// })
// app.get('/contactus',(req,res)=>{    // '/' create routes and get means server send data to client
//     res.sendFile(path.join(__dirname,"contactus.html"));

// })



app.post('/api/abes',(req,res)=>{
    console.log("body is---",req.body)
    res.json({})
})


app.listen(port,()=>{
    console.log(`app is run at:${port}`);
})