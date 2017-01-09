var add=(a,b) => a+b;

console.log(add(10,40));

let a=25;
console.log("a = "+a);

if(true){
    var x=2;    
}
console.log("x = "+x);

var names=["mahtab","aftab","zakira","alaina"];

console.log(...names)

var message=`I love my sister ${names[2]}`;
console.log("Message = "+message);

function title_heading(language="en"){
    if(language !== "en"){
        return "Language specific greeting";
    }else{
        return "Welcome user";
    }
}

console.log("Result = "+title_heading("cn"));

const PI=3.14;
console.log("PI = "+PI);

let first_name="Mahtab";
let last_name="Alam";
let person={first_name,last_name};
console.log("Person = "+person);

let loves="tea";
let person_details={person,loves};
console.log("Person details = "+person_details);


var obj={"name":"Mahtab Alam","age":24,display(){console.log("Name is : "+this.name)}};

obj.display();


//ES6  Destructuring Assignments

var {nickname}={name:"Johan Pablo",age:54,country:"Norway",nickname:"Pablo"};

console.log("Nickname = "+nickname)


// ES6 for of looping over Arrays(Iterables in general)

let list = [8, 3, 11, 9, 6]; 
for (let value of list) {
  console.log(value);
}

for (var char of 'Hello') {
    console.log(char);
}


// ES6 Array.from method 

const arrayLike = { length: 2, 0: 'a', 1: 'b' };

/*// for-of only works with iterable values
for (const x of arrayLike) { // TypeError
    console.log(x);
}*/

const arr = Array.from(arrayLike);
for (const x of arr) { // OK, iterable
    console.log(x);
}
// Output:
// a
// b
