function getdata(){
    fetch("https://api.github.com/users/Sarveshmishra9").then((response)=>{
        const data =response.json();
        return data;
        }).then((response)=>{
            console.log(response)
            const data=document.getElementById("parent");
            data.innerHTML= `${response.login} <br> ${response.id}`;
        })
}