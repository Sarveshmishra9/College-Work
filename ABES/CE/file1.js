const fs = require('fs'); //import
const data=fs.readFileSync("./data.txt", "utf-8");
// console.log(data.toString()); // tostring -> hello CE Student ko return jo data.txt me hai
// fs.writeFileSync("./data1.txt","abes promise");//create automaticaly new folder data1.txt
// fs.unlinkSync("./data1.txt");//create folder delete
if(data.match("H")){
    console.log("H is present")
    const changedata = data.replace("H", "ABES");
    fs.writeFileSync("./data.txt",changedata)
}