// // function aa1() {
// //     console.log("first");
// // }

// // setTimeout(aa1, 2000);

// // function aa2() {
// //     console.log("second");
// // }

// // aa2();

// // let a = new function() {
// //     console.log("constructor");
// // };

// // let b = () => {
// //     console.log("third");
// // };
// // b();

// // function rollnumber(num, delay, nextroll) {
// //     setTimeout(() => {
// //         console.log("Rollno. is", num);
// //         if (nextroll) nextroll();
// //     }, delay);
// // }

// // rollnumber(1234, 1000, () => {
// //     rollnumber(1235, 1004, () => {
// //         rollnumber(12135, 3242, () => {
// //             rollnumber(3555, 66444);
// //         });
// //     });
// // });
// // const promise = new Promise(function (resolve, reject) {
// //     console.log("my first Promise");
// //     resolve("resolved");
// //     // reject("rejected");
// // });
// // promise
// //     .then(() => {
// //         console.log("My First Then");
// //     })
// //     .catch(() => {
// //         console.log("My First Catch");
// //     });

// // function getRoll(num, delay) {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             console.log("Roll. No. is", num);
// //             resolve("successfully Done");
// //         }, delay); // corrected the variable name
// //     });
// // }

// // getRoll(1, 1000).then(() => {
// //     console.log("wait printing");
// //     getRoll(2, 2000).then(() => {
// //         console.log("Wait Printing");
// //         getRoll(3, 3000); // changed 30000 to 3000 for more practical delay
// //     });
// // });
// let promise = new promise((resolve, reject)=>{
//     resolve("this is my promise");
// })
// promise.then((data)=>{
//  console.log(data);
//  return data;
// });then(
//     (res) => {

//     }).catch(()=>{
//         console.log("error");
//     }).finally(()=>{
//         console.log("finally")
//     }) 
// function rollnumber(num, delay, nextroll) {
//         setTimeout(() => {
//              console.log("Rollno. is", num);
//              if (nextroll) nextroll();
//          }, delay);
//     }
    
//      rollnumber(1234, 1000).then( () => {
//          rollnumber(1235, 1004).then( () => {
//             rollnumber(12135, 3242).then( () => {
//                console.log("all roll are done");
//             });
//      })
//     }).catch(()=>{
//         console.log("An errorr occured while rolling")
//     })
//     async function printRollNumbers() {
//         await getRoll(1,1000);
//         await  getRoll(2,2000);
//         await getRoll(3,3000);
        
//     }
//     printRollnumbers();

// function orderfood(item,time){
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log("your food is:",item)
//         resolve("succesfully done");
//       },delay);
        
//       })
// }
//  async function printresturant(){
    
//     await getorder('delicious',2000);
//     await getorder('normal',500);
//     await getorder('medium',1000);  
//      printresturant();

//  }
 let url='https://api.github.com/users';
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
let url ='https://api.github.com/users';
let b = await fetch(url);
let data= await b.text();
console.log(data);
}

fetch()
     
        