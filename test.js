/*
var foo = 123;
if (true)
{
    //var foo = 345;

    (function () {var foo = 456;})();

}
console.log(foo); //should be 345
*/

/*
setTimeout(function() {
    console.log('2000 milliseconds have passed since this demo started');
}, 2000);
*/

/*
function outerFunction(arg) {
    var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction);
    }

    bar();


}

outerFunction('hellow closure!');
*/
/*
function outerFunction(arg){
    var variableintheoutter = arg;
    return function bar() {
        console.log(variableintheoutter);
    }
}

var innerfunction = outerFunction('hello outterfunc');

//outerfunction has returned.
innerfunction();

    */

/*
function longRunningOperation(callback) {
    //simulate 3 secs op
    setTimeout(callback, 3000);
}

function userClicked() {
    console.log("starting a long operation");
    longRunningOperation(function(){
        console.log("ending a long operation");
    })
}

userClicked();
*/

/*
function longRunningOperation(callback) {
    //simulate 3 secs
    setTimeout(callback, 3000);
}


function webRequest(request) {
    console.log("starting a long operation for request:", request.id);

    longRunningOperation(function(){
        console.log("ending a long operation for request:", request.id);
    });
}

webRequest({id: 1});
webRequest({id: 2});

    */
/*
var foo = {bas: 123};
var bar = foo;
bar.bas = 234;
console.log(foo.bas);
//reference based
*/

//this is how you make a true copy

/*
var foo = { bas: 123 };
var bar = { bas: foo.bas}; //copy

bar.bas = 456;
console.log(foo.bas);
*/

/*
var foo;
console.log(foo);
*/

/*
var x = {v:0};
if (x) {
    console.log(x.v);

}if (!null){
    console.log('falsy');
}if (!undefined){
    console.log('falsy');
}
    */
/*
function printableMessage() {
    var message = 'hello';
    function setMessage(newMessage) {
        if (!newMessage) throw new Error('cannot set empty message');
        message = newMessage;
    }
    function getMessage() {
        return message;
    }
    function printMessage() {
        console.log(message);
    }

    return {
        setMessage: setMessage,
        getMessage: getMessage,
        printMessage: printMessage
    };
}


//pattern in use
var awesome1 = printableMessage();
awesome1.printMessage();

var awesome2 = printableMessage();
awesome2.setMessage("xxxx");
awesome2.printMessage();

awesome1.printMessage();


/*

function foo(){
    this.foo = 123;
    console.log("is this global?: ", this == global);
}


foo();
console.log(global.foo)

var newFoo = new foo();
console.log(newFoo.foo);
    */
/*
var foo = {};
foo.__proto__.bar = 123;
console.log(foo.bar);

*/

/*
function foo(){};
foo.prototype.bar = 123;

var bas = new foo();
var bee = new foo();
bee.bar = 456;
console.log(bas.__proto__ === foo.prototype);
console.log(bas.bar);
console.log(bee.bar);


foo.prototype.bar = 678;
var bay = new foo();
console.log(bas.bar);
console.log(bay.bar);
console.log(bee.bar);
*/
/*

function someClass(){
    this.someProperty = 'some initial value';

}

someClass.prototype.someMemberFunction= function(){
    this.someProperty = 'modified value';
}

var instance = new someClass();

console.log(instance.someProperty);

instance.someMemberFunction();
console.log(instance.someProperty);


*/
/*
try {
    setTimeout(function(){
        console.log("about to throw an error");
        throw new Error('error thrown');

    }, 1000);
}
catch(e) {
    console.log("i will never excute!");
}
console.log("im outside the try block");

    */

setTimeout(function(){
    try{
        console.log("about to throw an error");
        throw new Error('error thrown');
    }
    catch(e) {
        console.log('error caught!');
    }
}, 1000);