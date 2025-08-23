
/*
//Ex:1
//function decleration 
function sum(a,b) {
    let c = a+b;
     console.log(`The sum of ${a} and ${b}  is ${c}`)
    return c;
}
//function calling
const addResult = sum(1,2);
console.log(`Sum result is ${addResult}`);

//end of Ex:1

*/

/*
//Function Expression
//a) Anonymous functions
 const sum2 = function  (a, b) {
    let c = a+b;
    console.log("The sum of "+ a+  " "+ b + " is "+c);
    console.log(`The sum of ${a} and ${b}  is ${c}`)
    return c;
}
  //sum2(1,2);
  //const sum3 = sum2;
    
  //sum2(1,2);
    sum2
    sum2(1,2)
    console.log(typeof sum2(1,2));

  //console.log( `sum is ${sum2(1,2)}`);

  //
  
  function printName() {
    console.log("Akhil Jain");
  }
  printName();
  const output = function () {
    console.log("Akhil Jain");
  }
  output();
  
 
const sum = (a,b) => {
    let c = a+b;
    console.log(`The sum of ${a} and ${b}  is ${c}`)
    return c;
}
console.log(sum(2,3));

*/


function printName() {
    console.log("Akhil Jain");
}

//printName();


// const output = function () {
//     console.log("Akhil Jain");
// }

/*

//const printName2 = () => console.log("Akhil Jain");
const printName2 = () => 
    "Akhil Jain"


console.log("PodTest"); //podtest

let firstname = printName2();  //no output
console.log(firstname); //Akhil Jain
console.log(printName2); // [function: printName2] 
console.log(typeof printName2); //function
console.log(printName2()); // Akhil Jain
console.log(typeof printName2()); //string

*/

const age1 = function(year) {
    let realAge = 2024- year;
    console.log(realAge);
    return realAge;
}
 //const realage = age1(1992)

 console.log(age1);
 console.log(typeof age1);
 //console.log(realage)
 //console.log(typeof realage)


 console.log(age1(1980));
 console.log(typeof age1(1980));

/*
const age2 = (year) => {
    let realAge = 2024- year;
    //console.log(realAge);
    return realAge;
}
console.log(age2(1980));
const age3 = (year) =>  2024- year;
*/

//console.log(age3(1980));
