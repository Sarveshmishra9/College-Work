function sum(arr) {
    return arr.reduce(function (a, b) {
       return a + b;
    }, 0);
 }
 
 var numbers = [1, 2, 3];
 
 console.log(sum(numbers));