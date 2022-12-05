"use strict" 

// display data in JS 
console.log("Hello World");

// dislaying data for debugging purposes 
console.log(4 + 6);

let bonuspoints = 50
console.log(bonuspoints)

//JS variables, good programming practice is to define all variables at the beginning of your script. 
var x = 5; 
let y = 6;
const z = 10; 
var car = "volvo";
let car2 = car.toUpperCase();
let car3 = car.toLowerCase(); 
let movie = "wakanda";
const key = "value"; 
console.log(movie.length);
let cut = car.slice(1); 
let cut1 = car.slice(3,4);
car.replace("a","b");

//Block Scope; variables declared in a block cannot be accessed outside the block
{
    let x = 3;
}
{
    const x = 2;
}

//Function Scope; variables declared in a function becomes local to the function, 
// these variables cannot be accessed outside a function. 

//Global Scope; variables declared outside of a block/function can be accessed anywhere 
// in a JS program. 


//JS Operators: +, *, -, /, %, =, **, ++, --, +=, -=, *=, /=, **=, %=, ==, !=, <, >, <=, >= 
// i++ = i + 1. i-- = i - 1 
var m, n;
m = 4 - 3; 
n = 4 % 2; 

let a, b; 
a = 5 + 6; 
b = 5 * 2; 

//JS Data Types: numbers, strings, objeects, functions, arrays, booleans 
//Arrays
let cars = ["saab", "audi", "volvo"];
//Length of an array 
let cars_length = cars.length; 
//Accessing an array elment 
console.log(cars[0]);
let car4 = cars[1];
//Changing an array element
cars[2] = "opel"; 
// Sorting an array element 
cars.sort(); 
//Appending array element
cars.push("toyota");
//Removing elements from an array, pop removes the last item in an array 
cars.pop(); 
//Deleting array element 
delete cars[0]; 

//JS Objects 
const names = {
    f_name:"tomiwa",
    l_name:"toba",
    m_name:"samuel"
};
let name1 = names.f_name;
console.log(name1 + " " + "is my first name.");
let name2 = names.l_name; 
console.log(name2 + " " + "is my last name.");
//Using THIS keyword to access object properties;
this.f_name;
this.l_name; 
//Nested Objects
const ibadan_eats = {
    mokola:"bitemore",
    sango:"aroma",
    dugbe:"palms mall",
    bodija:["delan", "sherry", "feedwell"],
    ologuneru:{
        tinuala:"major",
        gbopa:"feedwell"
    }
};

//Functions, functions do not end in semicolon, local variables created
// within a function are LOCAL to the function, cannot be used outside the function.
//A function parameter can have a default value.
function myfunction(a,b) {
    return a*b 
}

//Calling or Invoking a function;
let f = myfunction(4,5);
console.log(f); 

//Function with indefinite number of arguments;
function myfunc(...args) {

}

//Escape Characters 
let statement = "We are the so called \"Vikings\" in the North";
console.log(statement);

//JS Date, JS count months from 0 to 11, JS Get Date methods, JS Set Date Methods 
const d = new Date("2022-10-23");    //ISO Standard 

//JS Booleans 
let j = 1; 
Boolean(j); 

//JS Conditionals, if statement, if-else statements, if--else if, and else statements
//Conditionals do not end in semicolon 
//if - specify a block of code to be executed, if a specified condition is true 
//else - specify a block of code to be executed, if a specified condition is false
if (z < 20) {

}

if (m <= 3) {

} else {

} 

if (n > 30) {

} else if (n < 30) {

} else {

}

//switch - used to perform different actions based on different conditions, 
// the value of the expression is compared with the value of each case, if
//there is a match, the associated block of code is executed, if none of the 
// case matches the expression, the default code block is executed. 
switch (m >= 10) {
    case x:

    break;
    case y: 

    break; 
    default:

}

//JS Loops, loops do not have a semicolon attached 
// For Loop; expression1 is executed one time before the execution of the code block,
// expression2 is the condition for executing the code block, expression3  is executed, 
// every time after the code block has been executed
for (let i = 0; i < 5; i++) {

}

for (let a = 5, b = 4; a < 10; a++) {
    return a * b; 
}

//For In Loop; loops through the properties of an object 
for (let variable in object) {

}
let txt = " "
for (let x in person) {
    txt += person[x];     //person.x is not allowed 
}

//For Of Loop; loops through the elements of an iterable object(sequence of elements), such as arrays 
let ibadan_shops = []
for (let x of ibadan_shops) {

}

const lagos_locations = ['mushin', 'idimu', 'lekki', 'shagamu']; 
for (const y of lagos_locations) {
    alert(y); 
}

//While Loop; execute a block of code as long as a specified condition is true
while (condition) {

}
let i = 0
let code_no = " "
while (i < 10) {
    code_no += i + "is my code number";
    i++;
}

//JS Break and Continue statements:
//Break; jumps out of a loop 
//Continue; jumps over one iteration in a loop; breaks one iteration in the loop,
//if a specified condition occursm and continues with the next iteration in the loop.

//JS Sets; collection of unique values, similar to tuples in python
const letters = new Set(['a', 'b', 'c']);
//Adding values to a JS Set 
letters.add('d');
letters.add('e');
letters.add('f');

//JS Erros; try, catch and family; similar to try and except in python
try {

}
catch(err) {

}
finally {

}

//Always declare variables at the top, beginning of your script.
//Declare objects with const.
//Declare arrays with const. 
//End your switches with defaults.

//JS Classes. functions are called methods in classes 
class ClassName {
    constructor() {
    }
    method1() {}
    method2() {}
    method3() {}
}

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    present() {
        return "I have a" + this.year + this.name + "car";
    }
}
let myCar1 = new Car("Ford", 2014);
let ford = myCar1.present();
alert(ford);

class Model extends Car {
    constructor(name, year, model) {
        super(name, year);
        this.model = model;
    }
    show() {
        return "This" + this.name + this.model + "is a" + this.year + "model"; 
    }
}

let myCar2 = new Model("Ford", "2014", "Mustang");
let ford_model = myCar2.show();
alert(ford_model);

// JS HTML DOM; The HTML DOM is a standard to get, change add or delete HTML elements
//Finding HTML Elements 
document.getElementById("")
document.getElementsByClassName("")

//Adding HTML Elements 
document.createElement(element)

// Deleting HTML Elements
document.removeChild(element)

// Appending an HTML Element 
document.appendChild(element)

// Replacing an HTML Element 
//document.replaceChild(new, old)

// Changing the content of an HTML element 
const elem = document.getElementById("")
elem.innerHTML = "Hello JavaScript"

// Changing the attribute of an HTML element 
document.getElementById().attribute = ""
elem.title = "tm media website template"

// Changing the style of an HTML element
document.getElementById().style.property = ""
elem.style.display = "block" 


/////Others
//Adding Event Listener, clicking a button, clicking a box, using onclick in HTML.
let box = document.getElementById("box")
box.addEventListener("click", function deli() {
    console.log("The box is clicked")
})

// Using onclick in HTML, function in JavaScript 
let countel = document.getElementById("count-el")
let count = 0 
function increment() {
    count += 1
    countel.innerText = count 
}
function save() {
    console.log(count)
}

function greetuser(greeting, name) {
    let greetings = `${greeting}, ${name}!`
    return greetings
}
let firstuser = greetuser("Hi", "Tomiwa")
console.log(firstuser)

function adding(num1, num2) {
    let num3 = num1 + num2
    return num3
}
let f1 = adding(3, 4)
let f2 = adding(9, 102)
console.log(f1)
console.log(f2)

function getfirstelement(arr) {
    return arr[0]
}
let firstpat = getfirstelement([10,5,20])
console.log(firstpat)

let name = "Tomiwa"
let greeting = "Hi, my name is"
let mygreeting = greeting + " " + name
console.log(mygreeting)

let f_name = "tomiwa"
let l_name = "aribisala"
let fullname = f_name + " " + l_name 
console.log(fullname)

let nam = "Linda"
let thegreeting = "Hi there"
function greet() {
    let geet = thegreeting + ", " + nam + "!"
    console.log(geet)
}
greet()

let mypoints = 3 
function addpoints(num) {
    mypoints += num 
}
addpoints(7)
console.log(mypoints)

console.log("6" + 5)
console.log(6 + 5)
console.log("6" + "5")

let firstcard = 15
let seccard = 6
let sum = firstcard + seccard
let hasblackjack = false
let isalive = true
console.log(sum)
if (sum < 21) {
    console.log("Do you want to draw a new card?") 
    console.log(hasblackjack)  
} else if (sum === 21) {
    console.log("You've won a blackjack game!")
    console.log(isalive)
} else {``
    console.log("You're out of the game!")
    console.log(hasblackjack)
}

let age = 22
if (age < 21) {
    console.log("You can't enter the club!")
} else if (age >= 21) {
    console.log("Welcome to the club!")
} 

let cards = [7, 3, 9]
for (i = 0; i < cards.length; i++) {
    console.log(cards[i])
}

let player1 = 102 
let player2 = 103 
function player() {
    if (player1 > player2) {
        return player1
    } else if (player1 < player2) {
        return player2
    } 
}
let fastplayer = player()
console.log(fastplayer)

let randonnumber = Math.random()
console.log(randonnumber)
let floorednumber = Math.floor(3.5)
console.log(floorednumber)

let hasfinishedcourse = true
let eligibleforcertificate = true 
function cert() {
    console.log("Generating certificate...")
}
if (hasfinishedcourse === true && eligibleforcertificate === true) {
    cert()
} 
let hasthestone = true
let hasthevibe = false 
function has() {
    console.log("Generating hashtag...")
}
if (hasthestone === true  || hasthevibe === true) {
    has() 
}

const person = {
    name:"tomiwa",
    age:23,
    country:"nigeria"
}
function logData() {
    console.log(person.name + " " + "is" + " " + person.age + " " + "years old and lives in" + " " + person.country)
}
logData()

let agerange = 15
function trainservicefee() {
    if (agerange < 6) {
        console.log("Ticket is free")
    } else if (agerange <= 17) {
        console.log("Child discount applies")
    } else if (agerange <= 26) {
        console.log("Student discount applies")
    } else if (agerange <= 66) {
        console.log("Full price discount applies")
    } else if (agerange > 66) {
        console.log("Senior citizen discount applies")
    }
}
trainservicefee() 

let largecountries = ["China", "India", "USA", "Pakistan", "Indonesia"]
function countries() {
    console.log("The five largest countries in the world are:")
    for (let i = 0; i < 5; i++) {
        console.log("-" + " " + largecountries[i])
    }
}
countries()

// Using template strings 
let recipient = "James"
let greting = "Cheers" 
let mail = `Hey ${recipient}!, how is it going, ${greting}.`
console.log(mail) 

const gameplayer = "sala"
const opponent = "nick"
const game = "amazingfighter"
let points = 0 
let hawson = false 
function playinggame() {
    points += 100
    hawson = true
    if (hawson) {
        console.log(`${gameplayer} got ${points} points and won the ${game} game!`)
    } else {
        console.log(`The winner is ${opponent} and ${gameplayer} lost the game!`)
    }
}
playinggame()

function generateSentence(desc, arr) {
    let arraysentence = ""
    let lastindex = arr.length - 1 
    for (let i = 0; i < arr.length; i++) {
        if (i === lastindex) {
            arraysentence += arr[i] + "."
        } else {
            arraysentence += arr[i] + ", "  
        }
    }
    let baseString = `The ${arr.length} ${desc} in the world are ${arraysentence}`
    console.log(baseString)
}
generateSentence("largest countries", ["China", "Japan", "Korea"])