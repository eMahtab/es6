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

// ES6 for of looping over Arrays(Iterables in general)

var list = [8, 3, 11, 9, 6];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        console.log(value);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = 'Hello'[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var char = _step2.value;

        console.log(char);
    }

    // ES6 Array.from method 
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var arrayLike = { length: 2, 0: 'a', 1: 'b' };

/*// for-of only works with iterable values
for (const x of arrayLike) { // TypeError
    console.log(x);
}*/

var arr = Array.from(arrayLike);
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _x2 = _step3.value;
        // OK, iterable
        console.log(_x2);
    }
    // Output:
    // a
    // b
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}
//# sourceMappingURL=app.js.map