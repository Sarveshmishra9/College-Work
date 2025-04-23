const mongoose = require('mongoose');
async function dbConn() {
    const conn=await mongoose.connect('mongodb://localhost:27017/student-app');
    if(conn){
        console.log('db connect successfully')
    }
    else{
        console.log('db connection failed');
    }
}
module.exports=dbConn;