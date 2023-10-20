console.log("A mers");

var variabila = "Alex";
console.log(variabila + 1);
console.log(1 + 20);
console.log(typeof variabila);
variabila = "zmed";
console.log(variabila);

let varName1 = "Alex";
console.log(varName1);
varName1 = 12;
console.log(varName1);

const varName2 = "curs";
console.log(varName2);
// varName2 = 12;
// console.log(varName2);

console.log([]);
let arrayName = ["Alex", 12, false, 22];
console.log("Array-ul nostru: ", arrayName);
console.log(arrayName[0]);
console.log(arrayName[1] + arrayName[3] + arrayName[0]);

console.log(typeof arrayName);

let objectName = {
  firstName: "Laurentiu",
  lastName: "Sandor",
  yearsAsTeacher: 5,
};

console.log(objectName.firstName);

const userData = {
  userName: "Curs frumos",
  randomNumber: 32132132132132,
  yearJoined: 2015,
  currentYear: 2023,
  avatar: {
    small: "small image",
    medium: "medium image",
    large: "large image",
  },
  friends: ["John", "Mary", "Hank"],
};

console.log(userData.randomNumber); // comment
console.log("ani pe platforma: ", userData.currentYear - userData.yearJoined);
console.log("primul prieten din lista este : ", userData.friends[0]);

console.log("imaginea large : ", userData.avatar.large);

// nu se citeste nimic de la //

/* 
comment pe mai multe linii
*/

/* 

HOISTING : 
inainte sa execute orice cod, 
JAVASCRIPT il citeste si DOAR creeaza spatiu in memorie
pentru variabile
DUPA CE A CITIT TOT CODUL,  trece din nou prin el
dar executa ce are de gandit (console.log, operatii matematice, etc)
*/

// Exercitii din exercitii.js

console.log("exercitiuUnu primul titlu: ", exercitiuUnu[0].title);
console.table([
  exercitiuUnu[1].userId,
  exercitiuUnu[1].id,
  exercitiuUnu[1].title,
  exercitiuUnu[1].body,
]);

console.log(exercitiuDoi.status);
console.log(exercitiuDoi.data[0].employee_name);
