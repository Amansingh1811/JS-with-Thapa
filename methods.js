// // console.log(false + false);
// // console.log("AMAN" - "SINGH");    
// // console.log(false - true);
// // var num = 10;
// // var newnum = ++num + 10;
// // console.log(num);
// // console.log(newnum);
// // console.log(3**3);
// var LeapYear = 2100
// if (LeapYear % 4 === 0) {
//     if (LeapYear % 100 === 0) {
//         if (LeapYear % 400 === 0) {
//             console.log("this year " + LeapYear + " is a LeapYear" )
//         } else {
//             console.log("this year " + LeapYear + " is not a LeapYear")
//         }
//     } else {
//         console.log("this year " + LeapYear + " is a LeapYear")
//     }
// } else {
//     console.log("this Year " + LeapYear + " is not a LeapYear" );
// }

// num = 0;
// while(num <= 10){
//     console.log(num);
//     num++
// }

// var i = 0;
// var j = 8;
// for(var i = 9, j= 1; j <= 10; j++){
//     console.log(i + " * " + j + " = " + i*j);
// // }


// let arr = [25, 36, 49, 64, 81]
// const rootarr = arr.map((Element, index, arr) =>{
//     return `the Squre Root of this arrr ${arr} is ${Element*Element} and its index is ${index}`  ;
// })
// console.log(rootarr)
// console.log(arr)


// let arr = [2, 3, 4, 6, 8]
// const newarr = arr.map((Element,index,arr) =>{
//     var mularr  = Element * 2;
//     if(mularr > 10){
//         return mularr;
//     }else{
//         return "this number is not satisfied the above condition" ;
//     }
// })
// console.log(newarr);



// let arr = [2, 3, 4, 6, 8]
// const arr2 = arr.map((curElement)=> curElement * 2).filter((newElement) => newElement > 10).reduce((previousNum,curElement) =>{
//     return previousNum *= curElement
// });
// console.log(arr2);


// let myTweets ="Incididunt Non ullamco non qui exercitation pariatur.Et deserunt labore anim in culpa consectetur aliqua exercitation aliquip ea aute. Aliquip do culpa deserunt pariatur duis sint ullamco elit. Consequat quis dolor consectetur Lorem. Ea incididunt esse veniam id excepteur reprehenderit exercitation esse id fugiat proident tempor. Veniam id anim laboris adipisicing velit laboris ut. Pariatur reprehenderit ut cupidatat do non sunt excepteur est aute ullamco dolor aliquip anim ad.dolor ut ea culpa mollit commodo laboris occaecat exercitation adipisicing mollit fugiat aliqua. Reprehenderit non aliquip incididunt ea fugiat sit sit. Consectetur culpa quis anim adipisicing nostrud pariatur enim sunt nulla sit anim."
// let newTweets = myTweets.slice(0,280)
// console.log(newTweets);

//const add = (a,b) => {
//     return `addition is ${a + b}`
// }
// const mul = (a,b) => {
//     return ` multiplication is  ${a * b}`
// }

// const calculator = (num1, num2, operator) =>{
//     return operator(num1, num2)
// }
// console.log(calculator(3,5,mul));


// Promise basically consume by the Fetch process and hardly its created. 
// Promise is basically a (then or catch) 

// const setHeader = {
//     headers:{
//         Accept:"application/json"
//     }
// }

// fetch('https://icanhazdadjoke.com/',setHeader)
// .then((res) => console.log(res.json()))
// .catch((error) => console.log(error))