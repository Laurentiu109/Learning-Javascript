const para = document.querySelector("#ceva");

function handleParaClick() {
  console.log("ceva");
}

para.addEventListener(`click`, handleParaClick);

function logSomething() {
  console.log("text in consola");
}

function hasCallback(event, fn) {
  event === "click" && fn();
}

// setTimeout(() => void, number)

// setTimeout(() => {
//   alert("au trecut 5 secunde");
// }, 5000);

// sugestie validare input
function validateInput(input) {
  // curatam orice setTimeout am avut cand apelam functia
  clearTimeout();
  if (input.value.length < 3) {
    para.style.background = "red";
  } else {
    para.style.background = "green";
  }

  //   punem un nou timeout
  setTimeout(() => {
    para.style.background = "white";
  }, 3000);
}

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");

// call stack
// network stack

console.log("text");
console.log("text");
// console.log(text) AR BLOCA SINGURUL ACCES CATRE call stack
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");
console.log("text");

// setTimeout si setInterval este o functie asincrona

setInterval(() => {
  console.log("A trecut o secunda");
}, 1000);

const isLoaded = false;

// new Promise o pune automat in "pending"
const firstPromise = new Promise((resolve, reject) => {
  if (isLoaded) {
    // resolve muta din "pending" in "fulfilled"
    resolve("Page is loaded");
  } else {
    // reject muta in "pending" in "error"
    reject("You have an error");
  }
});

firstPromise
  .then((response) => console.log(response))
  .catch((err) => console.warn(err));

/* 
  BASE URL https://jsonplaceholder.typicode.com
  ENDPOINTS : /users
  METHOD : POST - trimite date, GET - cere date, PUT - modifica date, PATCH, DELETE
  */

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const userData = fetch("https://reqres.in/api/users")
//   .then((response) => response.json())
//   .then((json) => json);

// userData.then((res) => (para.innerHTML = JSON.stringify(res.data)));

// userData.then((res) => {
//   res.data.map((user) => (para.innerHTML += `<img src="${user.avatar}" />`));
// });

fetch("https://reqres.in/api/users/2", {
  method: "put",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application.json",
  },
  body: JSON.stringify({
    name: "sandor",
    job: "zion resident",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// const userUnknown = fetch("https://reqres.in/api/unknown")
//   .then((response) => response.json())
//   .then((json) => json);

// // userUnknown.then((res) => (para.innerHTML = JSON.stringify(res.data)));

// userUnknown.then((res) => {
//   res.data.map((user) => (para.innerHTML += `<p>${user.color}</p>`));
// });

// const userBody = fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => json);

// userBody.then((res) => res.map((u) => (para.innerHTML += `<p>${u.body}</p>`)));
