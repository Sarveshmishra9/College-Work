import express from 'express'
const users = [{
    id: 1,
    name: 'Sarvesh',
    age: 21
}]
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send(users)
});
app.use(express.json()); //builtin loader middleware

app.post("/",(req,res)=>{
    const bodydata = req.body;
    console.log(bodydata)
    res.send("This is post req data from server")
});
app.post("/api/createuser",(req,res)=>{
    // const bodydata = req.body;
    const{ name,age}=req.body;
    const newid=users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push({id: newid, name,age});
    res.send("New user created sucessfully")
});

app.get("/api/createuser/:id",(req,res)=>{
    // const bodydata = req.body;
    const{ id }=req.params;
    const user=users.find(user => user.id== id);
    res.send(user)
});

app.patch("/api/updateuser/:id",(req,res)=>{
    // const bodydata = req.body;
    const{ id }=req.params;
    const{name} = req.body;
    const index=users.findIndex(user => user.id== id);
    users[index].name=name;
    res.send("User is updated successfully")
});
app.delete("/api/deleteuser/:id",(req,res)=>{
    // const bodydata = req.body;
    const{ id }=req.params;
    const index=users.findIndex(user => user.id== id);
    users.splice(index, 1);
    res.send("User is delete successfully")
});
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});