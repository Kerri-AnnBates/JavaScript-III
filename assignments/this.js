/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - Which is when the 'this' keyword is used in a function at the global level, then 'this' will be the window/console object.

* 2. Implicit binding - 'this' points to the object that the function is called on. Or the object that is to the left of the dot.

* 3. New binding - 'this' gets attached to the object created by the 'new' keyword.

* 4. Explicit bingding - using .bind, .call, .apply to force 'this' to point to a certain object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let name = 'kerri-ann';

function greet() {
    // console.log(`hello, ${this}`);
    console.log(`Hello, ${name}`);
}
greet();

// Principle 2

// code example for Implicit Binding
const person = {
    name: 'bob',
    age: 40,
    speak: function(){
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
}

console.log(person.speak());

// Principle 3

// code example for New Binding
function Animal(obj) {
    this.species = obj.species,
    this.weight = obj.weight,
    this.sound = obj.sound,
    this.speak = function() {
        return `The ${this.species} weighs ${this.weight}lbs and ${this.sound}s`
    }
}

const cat = new Animal({
    species: 'feline',
    weight: 10,
    sound: 'meow'
});

console.log(cat.speak());

// Principle 4

// code example for Explicit Binding
const dog = new Animal({
    species: 'canine',
    weight: 65,
    sound: 'bark'
});

console.log(dog.speak());
console.log(dog.speak.call(cat));