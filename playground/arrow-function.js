var square = x => x * x;

// console.log(square(9));

// Note the difference between the two kind of arrow functions below. 
// Difference in arguments
// Difference in how this parameter is accessed

var user = {
    name: 'Abhishek',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    }
};

user.sayHiAlt(1,2,3);
