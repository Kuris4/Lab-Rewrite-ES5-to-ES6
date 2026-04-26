
// ==========================
// STEP 2: let / const
// ==========================

let name = "Alex";
const school = "University";

name = "Alex Updated";

console.log(name);
console.log(school);


// ==========================
// STEP 3: ARROW FUNCTIONS
// ==========================

const greet = (user) => {
    return `Hello ${user}`;
};

console.log(greet("Alex"));


// ==========================
// STEP 4: TEMPLATE LITERALS
// ==========================

const age = 18;

console.log(`My name is ${name} and I study at ${school}`);


// ==========================
// STEP 5: DESTRUCTURING
// ==========================

const student = {
    fname: "Alex",
    course: "IT"
};

const { fname, course } = student;

console.log(fname);
console.log(course);


// ==========================
// SPREAD OPERATOR
// ==========================

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);


// ==========================
// DEFAULT PARAMETERS
// ==========================

const multiply = (a, b = 2) => {
    return a * b;
};

console.log(multiply(5));
console.log(multiply(5, 3));