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
//# sourceMappingURL=app.js.map