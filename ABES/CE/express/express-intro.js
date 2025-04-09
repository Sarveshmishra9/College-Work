import express from 'express';

const app = express(); //server create
app.get('/api',(request,response)=>{
    response.send("Hello CE Students");
});
app.get('/api/:name',(request,response)=>{
    response.send("Hello CE Students");
});
    // const {name="Guest",rollno=100}=request.query;
    // console.log(name);
    // response.send(`Hello Dear ${name} and my roll no. is ${rollno}`);

    //********http://localhost:3000/api/Raj */
    app.get('/api/:name',(request,response)=>{
    try{
        const {name,rollno}=request.query;
        console.log(name);
        // response.send(`Hello Dear ${name} and my roll no. is ${rollno}`);
        if(!name){
            response.send({
                status: 404,message:"Name is required"
            });
            response.status(404).send("Name to dena hi hoga")
        }
        else{
            response.send(`Hello Dear ${name} and my roll no. is ${rollno}`)
        }

    }
    catch(error){
        console.log(error.message)
    }

});
const port=3000;
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});

