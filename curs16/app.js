//  definim o functie cu numele numeFunctie

function numeFunctie() {
  console.log("Sunt o functie!");
}

//  apelam o functie

numeFunctie();

console.log("Ma numesc Laurentiu.");
console.log("Ma numesc Cristian.");
console.log("Ma numesc Natalia.");
console.log("Ma numesc Bianca.");

console.log("Ma numesc _______.");

function printName(name) {
  console.log("Ma numesc " + name + ".");
}

// arrow function (ES5+, EcmaScript 2015)

const printName2 = (name) => console.log("Ma numesc " + name + ".");

printName("Laurentiu");
printName2("Laurentiu");

printName("Sandor");

console.log("Forma funtiei", printName);
console.log("Forma executarea functiei", printName());

console.log("16 * 88 = ", 16 * 88);
console.log("33 * 34 = ", 33 * 34);

function multiply(firstOperator, secondOperator) {
  console.log(
    firstOperator +
      " * " +
      secondOperator +
      " = " +
      firstOperator * secondOperator
  );
}

multiply(16, 88);

function divide(op1, op2) {
  console.log(`${op1} impartit ${op2} egal ${op1 / op2}`);
}

divide(50, 10);

const varName = "text";

const concatenare = "stringul primit este " + varName + ".";
const templateString = `Stringul primit este ${varName}.`;

console.log(concatenare);
console.log(templateString);

// `` introducem un string iar cand va intalni ${} atunci js va stii ca este cod de js

console.log("85 este mai mare decat 33");
console.log("13 este mai mic decat 33");

function checknumber(number) {
  if (number > 33) {
    console.log(`${number} este mai mare decat 33.`);
  } else if (number === 33) {
    console.log(`${number} este egal cu 33`);
  } else {
    console.log(`${number} este mai mic decat 33.`);
  }
}

checknumber(85);
checknumber(13);
checknumber(33);

console.log("13 este mai mic decat 23");
console.log("1 este mai mic decat 2");
console.log("3 este mai mic decat 88");

function checkSmallerNumber(op1, op2) {
  if (typeof op1 !== "number" || typeof op2 !== "number") {
    // inseamna OR. Daca una din conditii e falsa, nu intra in if
    console.log("Se pot folosi doar numere");
  } else if (op1 > op2) {
    console.log(`${op2} este mai mic decat ${op1}`);
  } else if (op2 > op1) {
    console.log(`${op1} este mai mic decat ${op2}`);
  } else {
    console.log(`${op2} este egal cu ${op1}`);
  }
}

checkSmallerNumber(13, 23);
checkSmallerNumber(10, "Laurentiu");
checkSmallerNumber("Laurentiu", 22);

/* 

= atribuie o valoare unei variabile sau schimba valoarea unei var declarate
== verifica valorile sa fie egale (ex: 1 == "1"); nu verifica ce data type este fiecare (numar,string)
==== verifica egalitatea valorile SI ca sunt acelasi tip de date (Ex. ambele sunt string)
!== cele doua valori trebuie sa fie diferite
*/

function returnsHalf(number) {
  return number / 2;
  //  return scoate valoarea rezultatului din functie
}

console.log(`jumate din 75 este ${returnsHalf(75)}`);

function returnsHalfFixed(number) {
  if (typeof number !== "number") {
    return "nu e un numar";
  } else {
    return number / 2;
  }
}

const consoleName = (name) => {
  console.log("New user saved.");
  console.log(`User ${name} saved successfully.`);
};

consoleName("Laurentiu");

// number === 23 ? thisIsIf : tisIsElse

const returnsHalfES5 = (number) =>
  typeof number !== "number" ? "not a number" : number / 2;

console.log(`Jumatate din 83 este ${returnsHalfES5(33)}`);

/*  in if / else din ES5+ , daca avem doar un if putem nota conditie
 && bloc de cod */

const multiplyByTwo = (oriceVarName) =>
  typeof oriceVarName === "number" && oriceVarName * 2;

console.log("===============================");

console.log(multiplyByTwo(44));
console.log(multiplyByTwo("laurentiu"));

const users = [
  "user1",
  "user2",
  "user3",
  "user4",
  "user5",
  "user6",
  "user7",
  "user8",
];

console.log(users.length);

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);

// 1: punct de inceput
// 2: punct final
// 3: ce facem in fiecare punct

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 5);
}

let j = 0;
while (j < 10) {
  console.log(`J este acum ${j}`);
  j++;
}
