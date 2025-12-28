/************** 
    CONDITIONS
 **************/

// * What are conditions ? 
// Conditions allow us to make decisions in our code . 
// We can execute different code based on certain rules or values.


//^ Example 1: if statement 
age = 18;

// check if the user is adult 
if (age >= 18) {
    console.log("You are an adult. "); // this code runs only if age >= 18 
}


//^ Example 2: if statement 
let hour = 10;

// check if the user is adult 
if (hour < 12) {
    console.log("Good morning ! "); // runs if conditions is true  
} else {
    console.log("Good afternoon !");  // runs if conditions is false

}



//^ Example 3: if...else  if...else  statement 
let score = 75;


if (score >= 90) {
    console.log("Grade A ");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Failed");

}


//^EXample 4 : Switch statement 

let day = 3; // 1= Monday , 2 = Tuesday , 3= Wednesday

switch (day) {
    case 1:
        console.log("monday");
        break; // stop after match  
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day "); // runs if no case matches 



}


/************** 
    ADVANCED IF ..ELSE EXERCISE
 **************/

// Simulate a login system 

let username = "Adam"; // just to take an example 
let password = "ADam@f.123";

// User input (in re    al life , this comes from a form )
let inpuUsername = "Adam";
let inputPassword = "ADam@f.123";

//checkuser login 
if (inpuUsername === username && inputPassword === password) {
    console.log(  "Hey " + username + "   \n     login successful ! ");
} else if (inpuUsername !== username && inputPassword !== password) {
    console.log("username not found  ");
} else if (inpuUsername == username && inputPassword !== password) {
    console.log("Wrong password  , please try again ");
} else {
    console.log("invalid ");

}



/** 
 *  *Explanation for beginners : 
 *   ` ===` checks both value and type 
 * `&&` is AND operator : both condtitions must be true 
 * `||` is OR operator : at least one conditions is ture 
 * if .... else if .... else  : helps us check multiple scenarios 
 */



//! the difference between cases and if .. else 

//&   1: if .. else
    //  Used for complex conditions.
    //  can check ranges , multiple variables , comparisons .
    //  Works with boolean expressions (true/false).
    //  Flexible you can use > , < , === , && , || etc.

//&   2: switch
    //  Used when yuo want to check a variable against many exact values . 
    //  Works best when you have one variable and discrete cases.Works
    //  Less flexible : cannot check ranges (without tricks).Less
    //  Each case must be avalue , not a condition .