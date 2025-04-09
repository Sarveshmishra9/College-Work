let url='https://api.github.com/users/sarvesh001';
let b =fetch(url);
b.then((data) => {
console.log(data)
return data.text();
}).then((data) => {
     console.log(data);
}).catch(() => {
console.log("Error")
}).finally(() => {
console.log("first")
})

async function fetchh() {
let url ='https://api.github.com/users/sarvesh001';
let b = await fetch(url);
let data= await b.text();
console.log(data);
}

fetchh()
     
        