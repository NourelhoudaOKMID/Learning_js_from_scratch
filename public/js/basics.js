
/************** 
    VARIABLES 
 **************/

//* what is variable :{ A variable is a container to store data in JavaScript }

//^ Example 1 : let ( changeable variable )

let country  = "Morocco";   // country name 

//* to display or  to show the value of the variable in the console we can use [ console.log()]
//console.log() is a JavaScript function used to print information to the console .
console.log("-------------Example 1 : let ---------------");

console.log(country); // output : Morocco 

country  = "Spain"  // change  the value of the  variable 
console.log(country); // Output : Spain 

//^ Example 2 : const ( constant variable )
console.log("-------------Example 2 : const ---------------");
const schoolName = "LionsGeek School" // the school name is fixed we can't change it 
console.log(schoolName);  // Output : LionsGeek School

//^ Example 3 : var ( old style variable )
console.log("-------------Example 3 : var ---------------");
var age = 21 ; 
console.log(age); // Output : 21

// The console is a special area in your browser or code editor where you can see the output of your code.
/*Why we use it : 
* . To check values of variables 
* . To debug your code 
* . To see results of calculations or messages 
**/
// Try changing values and  logging multiple times to see updates in the console 
console.log("New country :", country); 
console.log("I'm ", age);
age = 20
console.log("New age :" , age ); // the age changed successfully 
console.log("I study at",schoolName);


console.log("--------------Finale example for variables ---------------");
console.log(` I study at ${schoolName} and I am ${age} years old and I'm from ${country}`);


// Summary : 
// - let: changeable variable 
// -const: constant variable 
// - var : old style variable


/************** 
    DATA TYPES
 **************/

//* What are data types : Data types define the kind of value a variable holds in JavaScript

// Data types section
console.log("---------------Example 1: Number ----------------");
//this `studentAge` to avoid conflict with `age` in Variables section because if you declare let age = 29; again in the same scope , it will throw an error 

let studentAge = 29;  // integer number "int"
let height = 1.69;      //decimal number " float"   

console.log("Height :", height);
console.log("Age :" , age );


// calculations Examples  : 
let a = 10 ;
let b =20 ;


console.log("Sum :", a + b,"€" ); // 30€
console.log("Difference : ", b - a ); // 10
console.log("Difference : ", a * b ); // 200
console.log("Division : " , a / b  ); // 0.5



// String : any text inside quotes 
console.log("-------------Example 1 : of string  --------------");

let firstName = "Hello "
let secondName = "World"

console.log("first Name: " , firstName + "\n" + "secondName: " , secondName); // "\n" make you  able to return to the new ligne

// we can combine by + or use the template ` ${firstName}`

// using template :
console.log(` The best ${firstName} ${secondName} , Welcome to JS `);




// Boolean 

console.log("----------Example 2 : of Boolean ------------");
let isStudent = true;
let isGraduated = false ; 

console.log("Is student ? ", isStudent); // true 
console.log("Is graduated ? " , isGraduated); // false 
// we are going to used in conditions and logic and you 're going to understand 

console.log("----------------Example :Undefined----------------- ");

let city ; 
console.log(city); // undefined  
// in this case the JS has the variable : city but it has no value yet 


console.log("----------------------Example : Null ----------------------");
let phoneNumber = null ; 
console.log(phoneNumber); // Null

//* Summary : 
console.log("------------Data Types Summary-------------");
let n = 1;         // number 
let c = "JS";      //string
let h = false;     // boolean 
let u;             // undefined
let x = null ;     // null

console.log(typeof n);
console.log(typeof c);
console.log(typeof h);
console.log(typeof u);
console.log(typeof x); // object

console.log(typeof 10);
console.log(typeof "hello");
console.log(typeof true);
// ? typeof  null returns " object " -> this is a  known JavaScript bug  
console.log(typeof null); 
console.log(typeof undefined);






















