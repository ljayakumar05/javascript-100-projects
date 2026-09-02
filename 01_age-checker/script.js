console.log('Welocme JAI');

let a, b, c;

a = 5;
b = 2;
c = a + b;

console.log(c);

document.getElementById('demo1').innerHTML ="Welcome Jai!";

console.log(typeof true);

console.log(14 === 14 || 8 <= 6);

const isloggedIn = false; 

console.log(!isloggedIn);

let count = 5;
count --;
console.log(count);

const age = 22;

const result = age >= 18 ? "Adult" : "Minor";
console.log(result);

const firstName = "Jaya";
const lastName = "kumar";
console.log(firstName + " " +lastName);

const Name = "jayakumar";
const jkage = 30;
console.log(`My name is ${Name} and I am ${jkage} year old.`)

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Thursday":
        console.log("Almost Weekend");
        break;
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let j = 5; j >= 1; j--){
    console.log(j);
}

function greet(){
    console.log("Hello!");
}
greet();

function greets(name){
    console.log(`Hello ${name}`);
}
greets("jai");

function add(a, b){
    console.log(a + b);
}
add(5, 6);

function adds(a, b){
    return a + b;
}
const resultval = adds(10, 20);
console.log(resultval);