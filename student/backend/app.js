const express=require('express');
const cors=require('cors');
const fs=require('fs/promises');
const app=express();
const port=3000;
const users=[]

app.use(express.json())//post ke liye middle ware in built
app.use(cors())
const readdata=async()=>{
    users=JSON.parse(await fs.readFile('./data.json','utf8'))
}
const writedata=async()=>{
    await fs.writeFile('./data.json',JSON.stringify(users))
}
app.get('/users',(req,res)=>{
    res.json(users);
})
app.post('/users',async(req,res)=>{
    const newusers={
        id:users.length+1,
        name:req.body.name,
        age:req.body.age
    }
    users.push(newusers);
    await writedata();
    res.status(201).json({massages:"data save"})
})


app.listen(port,()=>{
    console.log(`app is run at:${port}`)
})