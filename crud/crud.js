const express=require('express');
const app=express();
const port=3000;
// midleware(inbuilt)
app.use(express.json())

const database=[{id:1,name:"mohan",age:30},//json array
                {id:2,name:"sarvesh",age:20}
            ]
//create(C)
app.post('/users',(req,res)=>{
    const newuser={  
        id:database.length+1,//for id auto increment
        name:req.body.name,
        age:req.body.age
    }
    database.push(newuser);
    res.status(201).json(newuser);
})
//Read(R) ---read all
app.get('/users',(req,res)=>{
    res.json(database);
})
//read 1
app.get('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const user=database.find(u=>u.id==userid)
    if(user){
        res.json(user)
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})
//update(U)
app.put('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id);
    const userIndex=database.findIndex(u=>u.id===userid)
    if(userIndex!=-1){
       database[userIndex]={...database[userIndex], ...req.body}
       res.json(database[userIndex])
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})
//delete(D)
app.delete('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id);
    const userIndex=database.findIndex(u=>u.id==userid)
    if(userIndex!==-1){
        const deleteuser=database.splice(userIndex,1)
        res.json(deleteuser)
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})


app.listen(port,()=>{
    console.log(`app is run at:${port}`);
})
