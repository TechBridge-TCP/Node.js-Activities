// returns an array of command line arguments
console.log(process.argv);

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);
// returns an array of command line arguments
console.log(process.argv);

// arguments passed from the command line are accessed by index
console.log(process.argv[1]);
console.log(process.argv[2]);
console.log(process.argv[3]);

var firstName = process.argv[2];
var lastName = process.argv[3];



if (firstName === undefined) {
    console.log(`First name is required...`)
}

console.log (`My name is ${firstName} ${lastName}`);
