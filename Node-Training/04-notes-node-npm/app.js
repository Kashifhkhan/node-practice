// require lodash module
//use module name same as it appears in package.json file
//first lookup for lodash module is core modules, then in folder node modules

const _ = require('lodash');

console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));

console.log(_.isString(true));
console.log(_.isString("Kashif"));

var filter = _.uniq([2,3,4,5,6,67,7,3,2,1,7, 67]);

console.log(filter);
//use method isString of Lodash
//use method uniq of Lodash
