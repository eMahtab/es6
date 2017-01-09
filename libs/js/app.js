"use strict";

var _console;

var _marked = [greet, greet, graph].map(regeneratorRuntime.mark);

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

var d = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (false) {
            resolve('hello world');
        } else {
            reject('no bueno');
        }
    }, 500);
});

d.then(function (data) {
    console.log('success : ', data);
    return 'foo bar';
}).then(function (data) {
    console.log('success 2 : ', data);
}).catch(function (error) {
    return console.error('error : ', error);
});

//ES 6 Generators

function greet() {
    return regeneratorRuntime.wrap(function greet$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log("You called 'next()'");
                    _context.next = 3;
                    return "hello";

                case 3:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var greeter = greet();
console.log(greeter);
var next = greeter.next();
console.log(next);
var done = greeter.next();
console.log(done);

//------------
function greet() {
    var friendly;
    return regeneratorRuntime.wrap(function greet$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return "How";

                case 2:
                    friendly = _context2.sent;
                    _context2.next = 5;
                    return friendly + "are";

                case 5:
                    friendly = _context2.sent;
                    _context2.next = 8;
                    return friendly + "you?";

                case 8:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

var greeter2 = greet();
console.log(greeter2.next("first").value);
console.log(greeter2.next(" the heck ").value);
console.log(greeter2.next(" silly ol'").value);

//-----------
function graph() {
    var x, y;
    return regeneratorRuntime.wrap(function graph$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    x = 0;
                    y = 0;

                case 2:
                    if (!true) {
                        _context3.next = 9;
                        break;
                    }

                    _context3.next = 5;
                    return { x: x, y: y };

                case 5:
                    x += 2;
                    y += 1;
                    _context3.next = 2;
                    break;

                case 9:
                case "end":
                    return _context3.stop();
            }
        }
    }, _marked[2], this);
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
//# sourceMappingURL=app.js.map