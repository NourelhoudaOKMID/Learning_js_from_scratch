
/************** 
    METHODES 
 **************/


    //Let's start with a basic array 
let fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits:", fruits); // ["Apple", "Banana", "Orange"]

//-------------------------
//^ push() -add item to the end 
fruits.push("Mango");
console.log("After push: ", fruits);//["Apple", "Banana", "Orange", "Mango"]


//^pop() -remove the last item
let removedFruit = fruits.pop();

["Apple", "Banana", "Orange"]/************** 
    ARRAY METHODS
 **************/

console.log("----------ARRAY METHODS EXAMPLES----------");

console.log("Removed fruit:", removedFruit); // Mango
console.log("After pop:", fruits); // ["Apple", "Banana", "Orange"]

// 3️⃣ unshift() - add item to the beginning
fruits.unshift("Strawberry");
console.log("After unshift:", fruits); // ["Strawberry", "Apple", "Banana", "Orange"]

// 4️⃣ shift() - remove first item
let firstFruit = fruits.shift();
console.log("Removed first fruit:", firstFruit); // Strawberry
console.log("After shift:", fruits); // ["Apple", "Banana", "Orange"]

// 5️⃣ indexOf() - find the index of an element
console.log("Index of Banana:", fruits.indexOf("Banana")); // 1

// 6️⃣ includes() - check if element exists
console.log("Does it include Mango?", fruits.includes("Mango")); // false

//-------------------------
// 7️⃣ length - number of items
console.log("Number of fruits:", fruits.length); // 3

//-------------------------
// 8️⃣ slice() - copy part of an array
let citrus = ["Lemon", "Lime", "Orange"];
let someCitrus = citrus.slice(0, 2); // copy from index 0 to 1
console.log("Sliced citrus:", someCitrus); // ["Lemon", "Lime"]

// 9️⃣ splice() - remove and/or add elements
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 99); // at index 2, remove 1 item, add 99
console.log("After splice:", numbers); // [1, 2, 99, 4, 5]

//-------------------------
//  🔥 Higher-order methods with conditionals
let students = [
    {name: "Adam", score: 90},
    {name: "Eve", score: 70},
    {name: "John", score: 50},
];

// 10️⃣ filter() - get elements that match a condition
let passedStudents = students.filter(student => student.score >= 60);
console.log("Passed students:", passedStudents);

// 11️⃣ map() - transform elements
let studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);

// 12️⃣ find() - get first element matching condition
let topStudent = students.find(student => student.score > 80);
console.log("Top student:", topStudent);

// 13️⃣ some() - check if at least one element passes condition
let anyFailed = students.some(student => student.score < 60);
console.log("Any student failed?", anyFailed);

// 14️⃣ every() - check if all elements pass condition
let allPassed = students.every(student => student.score >= 50);
console.log("All students passed?", allPassed);

//-------------------------
// 15️⃣ forEach() - loop over elements
console.log("Student scores:");
students.forEach(student => console.log(`${student.name}: ${student.score}`));






/***********************
    OBJECTS IN JAVASCRIPT
 ************************/

/*
What is an object?
An object is a data type that allows us to store multiple values
and functions (methods) inside one variable.

Objects represent real-life things.
*/

// Basic object example
let user = {
    name: "Nour",
    age: 21,
    isStudent: true
};

console.log(user);

/*
Access object properties
*/
console.log(user.name); // Nour
console.log(user.age);  // 21


/***********************
    OBJECT METHODS
 ************************/

/*
Object methods are functions inside objects.
They describe actions the object can do.
*/

let student = {
    firstName: "Nour",
    lastName: "Okmid",
    age: 21,

    // method
    greet: function () {
        console.log("Hello, my name is " + this.firstName);
    },

    // method with logic
    isAdult: function () {
        return this.age >= 18;
    }
};

// Call object methods
student.greet();               // Hello, my name is Nour
console.log(student.isAdult()); // true


/***********************
    REAL-LIFE OBJECT EXAMPLE
 ************************/

let bankAccount = {
    owner: "Nour",
    balance: 1000,

    deposit: function (amount) {
        this.balance += amount;
        console.log("Deposit successful. New balance:", this.balance);
    },

    withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawal successful. Balance:", this.balance);
        } else {
            console.log("Not enough balance!");
        }
    }
};

bankAccount.deposit(500);
bankAccount.withdraw(300);
bankAccount.withdraw(2000);


/***********************
    BUILT-IN OBJECT METHODS
 ************************/

/*
Object.keys() → returns an array of keys
*/
console.log(Object.keys(student));

/*
Object.values() → returns an array of values
*/
console.log(Object.values(student));

/*
Object.entries() → returns key-value pairs
*/
console.log(Object.entries(student));


/***********************
    ADD / UPDATE / DELETE
 ************************/

// Add new property
student.city = "Casablanca";
console.log(student);

// Update property
student.age = 22;
console.log(student.age);

// Delete property
delete student.lastName;
console.log(student);


/***********************
    LOOP THROUGH OBJECT
 ************************/

for (let key in student) {
    console.log(key + ":", student[key]);
}


/***********************
    OBJECT VS ARRAY (IMPORTANT)
 ************************/

/*
Array:
- Ordered list
- Access by index
- Example: [1, 2, 3]

Object:
- Key-value pairs
- Access by key
- Example: { name: "Nour", age: 21 }
*/


/***********************
    SUMMARY
 ************************/

/*
✔ Objects store related data and actions together
✔ Methods are functions inside objects
✔ `this` refers to the current object
✔ Objects are used everywhere in real projects
*/
