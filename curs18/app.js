// clases

class Car {
  constructor(make, model, year) {
    // this in cazul claselor inseamna toata clasa
    this.make = make;
    this.model = model;
    this.year = year;
  }

  //   metoda a clasei car

  getCarDetails() {
    console.log(`This is a ${this.year}, ${this.make + "" + this.model}.`);
  }
}

const myCar = new Car("Ford", "Focus", 2020);
const yourCar = new Car("Ford", "Mondeo", 2020);

// console.log(myCar);
// console.log(yourCar);

myCar.getCarDetails();

//  GATA cu clasele

const nume = ["Ion", "Laurentiu", "James", "Marcel", "Bogdan"];

console.log("==============================================");

console.log(nume[0]);
console.log(nume[1]);
console.log(nume[2]);
console.log(nume[3]);
console.log(nume[4]);

console.log("===================== FOR =========================");

for (let i = 0; i < nume.length; i++) {
  console.log(nume[i]);
}

const names = ["Ion", "Laurentiu", "James", "Marcel", "Bogdan"];

// trecem prin fiecare element din array
console.log("======================= MAP =======================");
// numeArray.map((varNameUnSingurNume) => )
names.map((name) => console.log(name));
console.log("======================= MAP CU INDEX =======================");
names.map((name, index) => console.log(name, index));

// numeArray.map ((NumeElementArraySingur, indexul) => logica)

names.map((singleName) => {
  // punem in acolade doar cand avem mai multe inii de logica
  console.log(singleName);
  return singleName;
});

console.log("======================= toString =======================");
const tostring = names.toString();
console.log(tostring);

var nr = 2020;
nr = nr.toString();
console.log(typeof nr, nr);

var obj = {
  name: "Alex",
  age: 18,
};

console.log(obj);

obj = obj.toString();

console.log(obj); // [object Object]

console.log("======================= JOIN =======================");

let joinedArray = names.join("-");
console.log(joinedArray);

console.log("======================= POP =======================");
// scoate ultimul element dintr-un array
names.pop();
console.log(names);

console.log("======================= SHIFT =======================");
// scoate primul element dintr-un array
names.shift();
console.log(names);

console.log("======================= UNSHIFT =======================");
// adauga un element in array la index 0
names.unshift("Decebal");
console.log(names);

console.log("======================= INCLUDES =======================");
// returneaza true / false daca elementul exista in array

if (names.includes("Decebal")) {
  console.log("names contine Decebal");
} else {
  console.log("names nu contine numele");
}

console.log("======================= find =======================");
// arrayName.find(() => condition)
// gaseste primul element care indeplineste condition
const arrayFind = names.find((name) => name === "Decebal");
console.log(arrayFind);

console.log("======================= filter =======================");
// arrayName.filter(() => condition);
// return array
const arrayFilter = names.filter((name) => name === "Decebal");
console.log(arrayFilter);

// exercitiu

// appState.article_posted.map((id) => {
//   let article = posts.find((post) => post.id === id);
//   let author = accounts.find((account) => account.id === article.author_id);
//   article.author_id = author;
//   console.log(article);
// });

console.log("======================= push =======================");
// adauga un element in capatul array-ului
let users = [1, 2, 3, 4, 5, 6, 7];
users.push("valoarea adaugata");
console.log(users);

console.log("EXERCITIU");

let abc = [
  "prima litera",
  "a doua litera",
  "a treia litera",
  "a patra litera",
  "a cincea litera",
];

abc.map((litere, i) => console.log(litere, i));

console.log("================== EXERCITIU ==========================");

const orase = ["Oradea", "Cluj", "Bucuresti", "Iasi", "Constanta"];

orase.map((oras, i) => console.log(oras, i));
