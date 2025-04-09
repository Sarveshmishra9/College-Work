// const http=require('http');
// const axios=require('axios');
// const port = 3000;


// const server=http.createServer(async(req,res)=>{
//     console.log('New request recieved');
//     res.writeHead(200,{'Conetnt-Type':'application/json'});
//     // const response=await fetch("https://dummyjson.com/products")
//     // const data= await response.json();
//     const response=await axios.get("https://dummyjson.com/products")
//     const productsdata=  response.data.products;
//     let frontdata =`<html><head></head><body>`
//     productsdata.forEach((product)=>{
//         frontdata +=`<div><img src="${product.thumbnail}"></div>`

// });
//     frontdata += `</body></html>`

//     // res.end(JSON.stringify(adata));
//     res.end(frontdata)

// });
// server.listen(port, ()=>{
//     console.log(`server is running port ${port}`);
// })

const http = require('http');
const axios = require('axios');

const server = http.createServer(async (req, res) => {
    console.log('new request received');

    res.writeHead(200, { 'Content-Type': 'text/html' });

    const response = await axios.get("https://api.github.com/search/users?q=location:ghaziabad");
    const productsdata = response.data.items;

    let frontdata = `<html><head></head><body>`;
    
    productsdata.forEach(product => {
        frontdata += `<div><img src="${product.avatar_url}"></div>`;
    });

    frontdata += `</body></html>`;

    res.end(frontdata);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
