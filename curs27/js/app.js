const loader = document.querySelector("#loading");
const contentArea = document.querySelector("#content");

const BASE_URL = "https://reqres.in";
const DELAYED_USERS = "/api/users?delay=5"; // ? query parameters

const userData = fetch(BASE_URL + DELAYED_USERS).then((res) => res.json());

function printPageData(incomingData) {
  contentArea.innerHTML = incomingData;
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 800);
}

userData
  .then((res) => printPageData(JSON.stringify(res)))
  .catch((err) => printPageData(JSON.stringify(err)));
