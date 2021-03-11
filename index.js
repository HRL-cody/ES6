// Const is an alternative to the var 
// keyWord its alows us to create a constance 
// or value that cannot be redeclared
// 1 var Vs const Declaring Strings && Primitive so we ae not able to change a value of primitive:
// Strings numbers boolean null undifian
/// const dose not make data immutibale 

// scopes in js if, for while do try & Catch
//2 let: blockscope 
//befor ES6 there were To kinds of Blocks Globale & function scope  
// var instructor = "hamouda";
// if(instructor === "hamouda"){
//     let funFact = "paly Guitar!!"
// }

//hoistiong javascript with var knows that somthing exists and give it a default val of undef on Top of the file

// assign console.log(object) to a variable log

//Create a variable v1 with var this led to a lot of programmer readding some val befor they declare it && this is not a good practice
//log the V1

//wihch let this is changed with let hee js 
// L1 with let //
// log the L1


//Cannot access befor init//

// 3 Template String Litrals

/// declaring variable of my name and other with my last and thierd with Greeting with the Clasic way
/// use the template with $ and concate the hello with the 2 var in one Code




//4 arrow Func
// remove the key word Function and replace it withe =>
//Exercices to challenge them
// Exemple: val => val and operation arrow Function 
// function tripleAndFilter(arr){
//   return arr.map(function(value){
//     return value * 3;
//   }).filter(function(value){
//     return value % 5;
//   })
// }

// 1
let tripleAndFilter = arr => arr.map(val => val * 3).filter(val => val % 5 === 0);

// function doubleOddNumbers(arr){
//     return arr.filter(function(val){
//         return val % 2 !== 0;
//     }).map(function(val){
//         return val *2;
//     })
// }

// 2
let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2 );

// function mapFilterAndReduce(arr){
//   return arr.map(function(val){
//     return val.firstName
//   }).filter(function(val){
//     return val.length < 5;
//   }).reduce(function(acc,next){
//     acc[next] = next.length
//     return acc;
//   }, {})
// }

// 3
let mapFilterAndReduce = (arr) => arr.map(val => val.firstName).filter(val => val.length < 5)
  .reduce((acc,next) => {
      acc[next] = next.length
      return acc;
    }, {})

// 4
let createStudentObj = (firstName, lastName) => ({firstName:firstName, lastName:lastName});


