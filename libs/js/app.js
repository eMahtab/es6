"use strict";

var _console;

var add = function add(a, b) {
    return a + b;
};

console.log(add(10, 40));

var a = 25;
console.log("a = " + a);

if (true) {
    var x = 2;
}
console.log("x = " + x);

var names = ["mahtab", "aftab", "zakira", "alaina"];

(_console = console).log.apply(_console, names);

var message = "I love my sister " + names[2];
console.log("Message = " + message);

function title_heading() {
    var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en";

    if (language !== "en") {
        return "Language specific greeting";
    } else {
        return "Welcome user";
    }
}

console.log("Result = " + title_heading("cn"));

var PI = 3.14;
console.log("PI = " + PI);

var first_name = "Mahtab";
var last_name = "Alam";
var person = { first_name: first_name, last_name: last_name };
console.log("Person = " + person);

var loves = "tea";
var person_details = { person: person, loves: loves };
console.log("Person details = " + person_details);

var obj = { "name": "Mahtab Alam", "age": 24, display: function display() {
        console.log("Name is : " + this.name);
    }
};

obj.display();

//ES6  Destructuring Assignments

var _name$age$country$nic = { name: "Johan Pablo", age: 54, country: "Norway", nickname: "Pablo" },
    nickname = _name$age$country$nic.nickname;


console.log("Nickname = " + nickname);
//# sourceMappingURL=app.js.map