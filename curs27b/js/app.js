const emailReg =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const fn = document.querySelector("#fName");
const ln = document.querySelector("#lName");
const email = document.querySelector("#email");
const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const loginButton = document.querySelector("#login");
const registerButton = document.querySelector("#register");
const loginTab = document.querySelector("#loginWrapper");
const registerTab = document.querySelector("#registerWrapper");
const error = document.querySelector("#error");
const loginEmail = document.querySelector("#loginEmail");
const loginPass = document.querySelector("#loginPass");
const activeTab = document.querySelectorAll(".activeTab");

loginButton.addEventListener(`click`, () => {
  loginTab.style.display = "block";
  loginButton.style.backgroundColor = "#70d6ff";
  loginButton.style.color = "#ffffff";
  registerButton.style.backgroundColor = "";
  registerButton.style.color = "";
  registerTab.style.display = "none";
});

registerButton.addEventListener(`click`, () => {
  registerTab.style.display = "block";
  registerButton.style.backgroundColor = "#70d6ff";
  registerButton.style.color = "#ffffff";
  loginButton.style.backgroundColor = "";
  loginButton.style.color = "";
  loginTab.style.display = "none";
});

function validateInput(el) {
  switch (el.type) {
    case "text":
      if (el.value.length < 4) {
        el.style.border = "1px solid red";
        error.innerText = "Value must be at least 4 characters.";
        return; // return ne scoate din functie
      }
      break; // break ne scoate din switch

    case "email":
      if (!emailReg.test(el.value)) {
        el.style.border = "1px solid red";
        error.innerText = "Please enter a valid email address.";
        return;
      }
      break;

    default:
      if (el.value.length < 4) {
        el.style.border = "1px solid red";
        error.innerText = "Value must be at least 4 characters.";
        return;
      }
      break;
  }
}

function registerAccount() {
  if (pass1.value !== pass2.value) {
    error.innerText = "Passwords do not match.";
    return;
  }
  let dataToSend = {
    first_name: fn.value,
    last_name: ln.value,
    email: email.value,
    password: pass1.value,
  };
  fetch("https://backend-curs.herokuapp.com/users/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}

function loginAccount() {
  let dataForLogin = {
    email: loginEmail.value,
    password: loginPass.value,
  };
  fetch("https://reqres.in/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForLogin),
  })
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem("token", json.token);
      loginSuccessRedirect();
    })
    .catch((err) => console.log(err));
}
