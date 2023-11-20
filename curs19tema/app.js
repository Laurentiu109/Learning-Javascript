console.log(window);
console.log(document);

const div = document.getElementById("primulDiv");

console.log(div);

console.log(div.style);

const divs = document.getElementsByClassName("alDoileaDiv");

console.log(divs.length);
console.log(divs[0]);

const simpleDiv = document.querySelector("#primulDiv");
console.log("query selector: ", simpleDiv);

const simpleDivs = document.querySelectorAll(".alDoileaDiv");
console.log(simpleDivs.length);
console.log(simpleDivs[0]);

document.querySelector('div[data-id="test"]');

// querySelector se opreste dupa primul match
const multipleDivs = document.querySelector(".alDoileaDiv");
// linia 25 va returna un singur element

console.log("qs pe clasa: ", multipleDivs);
const singleDivs = document.querySelectorAll("#primulDiv");

console.log("qsa pe id : ", singleDivs);

console.log("============= INPUT =================");

const input = document.querySelector("#input");
console.log(input);

input.style.border = "10px grey solid";

console.log("================ onclick event ================");

const para = document.querySelectorAll(".para");

const showHome = () => {
  para[0].style.display = "block";
};

const showContact = () => {
  para[1].style.display = "block";
};

const showAbout = () => {
  para[2].style.display = "block";
};

//  pre es5

// function showItem(item) {
//   for (let i = 0; i < para.length; i++) {
//     para[i].style.display = "none";
//     if (para[i].classList.contains(item)) {
//       para[i].style.display = "block";
//     } else {
//       para[i].style.display = "none";
//     }
//   }
// }

//  es5+

const showItem2 = (item) => {
  // para este nodeList nu Array
  // dar se poate converti

  Array.from(para).map((p) => {
    p.classList.contains(item)
      ? (p.style.display = "block")
      : (p.style.display = "none");
  });
};

console.log("================ onclick event 2 ================");

const blackPara = document.querySelector("#para");

const changeColor = () => {
  blackPara.style.color = "red";
};

console.log("================ mouse enter/leave event ================");

const homePara = document.querySelector("#pHome");
const aboutPara = document.querySelector("#pAbout");

const hoverHome = () => {
  homePara.style.display = "block";
};

const hoverAbout = () => {
  aboutPara.style.display = "block";
};

const endHoverHome = () => {
  homePara.style.display = "none";
};

const endHoverAbout = () => {
  aboutPara.style.display = "none";
};

// creati o functie care face tot ce fac cele 4 de deasupra

const allParas = document.querySelectorAll(".tema");

const handleMouseOver = (clasa) => {
  for (let i = 0; i < allParas.length; i++) {
    if (clasa === undefined) {
      allParas[i].style.display = "none";
    }
    if (allParas[i].classList.contains(clasa)) {
      allParas[i].style.display = "block";
    } else {
      allParas[i].style.display = "none";
    }
  }
};
