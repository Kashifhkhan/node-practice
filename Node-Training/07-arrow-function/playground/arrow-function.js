/*var square = (x) => x*x;*/

/*
var square = (x) => {
    var result = x*x;
    return result;
}; */

//if one argument then no paranthesis
//so
var square = x => x*x;
console.log(square(9));

var user = {
    name: 'Vikas',
    sayHi: () => {
        //console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    },
    sayHiAlt: function ()  {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    } 
};
user.sayHi();
user.sayHiAlt(1,2,3);

//Arrow functions don't have this keyword
//Arrow functions don't have arguments object binded