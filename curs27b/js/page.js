const postsParent = document.querySelector("#posts");
const loadingScreen = document.querySelector("#loading");

const author = document.querySelector("#author");

const imagine = document.querySelector("#img");
const textPost = document.querySelector("postText");
const sendPost = document.querySelector("#send");
const video = document.querySelector("video");

function logOut() {
  // 1. Stergem token-ul din local storage
  localStorage.removeItem("token");
  //   2. Dam refresh la pagina fara token
  handleLogOut();
}

fetch("https://backend-curs.herokuapp.com/posts", {
  headers: {
    Authorization: "Bearer" + localStorage.token,
  },
})
  .then((response) => response.json())
  .then((responseInJsonForm) => {
    responseInJsonForm.map((post, index) => {
      postsParent.innerHTML += `<p>${index + 1}. ${post.author}</p>`;
      postsParent.innerHTML += `<p>${post.content.text}</p>`;
      postsParent.innerHTML += `<p>${post.author.image}</p>`;
      postsParent.innerHTML += `<p>${post.date}</p>`;
      postsParent.innerHTML += `<p>${post.content.video}</p>`;
    });
  })
  .catch((err) => console.log(err));
loadingScreen.style.display = "none";

let dataToPosts = {
  author: author.value,
  content: {
    text: textPost.value,
    video: videoPost.value,
    image: [imagine.value],
  },
};

fetch("https://backend-curs.herokuapp.com/posts", {
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dataToPosts),
})
  .then((post) => post.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
