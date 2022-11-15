// When using var, suggest use let
var x = 123;
console.log(x + 1);

// when variable never reassigned, suggest use const
let y = 'y';
console.log(y);

// when variable never used
const z = 'z';

// when missing semicolon
const a = 'a'
console.log(a);

// ...etc
