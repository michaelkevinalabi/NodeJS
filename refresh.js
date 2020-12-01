const person = {
 name: 'Michael',
 age: 12,
 greet() {
     console.log("hi, I am " + this.name);
 }   
};

person.greet();