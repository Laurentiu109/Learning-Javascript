const newsfeedContent = {
  myAccount: {
    username: "sandorlaurentiu",
    firstName: "Laurentiu",
    lastName: "Sandor",
    profileImg: "https://source.unsplash.com/60x60",
    authToken: "dsaiduhas78dahd8sa7dsa",
  },
  newsfeed: [
    {
      author: {
        username: "littlesistersinc",
        firstName: "Brigit",
        lastName: "Tenebaum",
        postDate: "30 Nov 1967",
        profileImg: "https://source.unsplash.com/61x61",
      },
      metadata: {
        likes: 0,
        comments: [
          {
            author: {
              username: "rosalute",
              firstName: "Rosalind",
              lastName: "Lutece",
              postDate: "20 Dec 1946",
              profileImg: "https://source.unsplash.com/61x62",
            },
            content: `One could bielieve a mission etc etc etc`,
          },
        ],
        shares: 1,
      },
      content: {
        images: [
          "https://source.unsplash.com/601x400",
          "https://source.unsplash.com/602x400",
        ],
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        videos: [],
      },
    },
    {
      author: {
        username: "al doilea post",
        firstName: "Prenume",
        lastName: "Nume",
        postDate: "01 Jan 1968",
        profileImg: "https://source.unsplash.com/62x62",
      },
      metadata: {
        likes: 451,
        comments: [],
        shares: 3,
      },
      content: {
        images: [],
        text: "Al doilea post cu o descriere superba Al doilea post cu o descriere superba Al doilea post cu o descriere superba",
        videos: [],
      },
    },
    {
      author: {
        username: "al treilea post",
        firstName: "Prenume2",
        lastName: "Nume2",
        postDate: "13 Feb 1968",
        profileImg: "https://source.unsplash.com/63x63",
      },
      metadata: {
        likes: 11,
        comments: [
          {
            author: {
              username: "Al 3 lea comment de la postare 3",
              firstName: "First Name3",
              lastName: "Last Name3",
              postDate: "20 Dec 1946",
              profileImg: "https://source.unsplash.com/62x64",
            },
            content: `content 3 content 3 content 3`,
          },
        ],
        shares: 221,
      },
      content: {
        images: ["https://source.unsplash.com/605x400"],
        text: " Al 3-lea post cu o alta descriere Al 3-lea post cu o alta descriere Al 3-lea post cu o alta descriere",
        videos: [],
      },
    },
  ],
};

const userData = [
  {
    admin: true,
    name: "Sandor",
    username: "sandorlaurentiu",
    email: "sandor@gmail.com",
    status: "banned",
    favoriteFruits: ["apple", "kiwi", "bananna"],
    privateData: true,
  },
  {
    admin: false,
    name: "John Doe",
    username: "unknown",
    email: "name@provider.com",
    status: "active",
    favoriteFruits: ["apple", "kiwi", "bananna"],
    privateData: true,
  },
  {
    admin: false,
    name: "Derek",
    username: "Derekjohn",
    email: "name@provider.com",
    status: "active",
    favoriteFruits: ["apple", "kiwi", "bananna"],
    privateData: false,
  },
  {
    admin: false,
    name: "Elton",
    username: "eltonjon",
    email: "name@provider.com",
    status: "active",
    favoriteFruits: ["apple", "kiwi", "bananna"],
    privateData: false,
  },
  {
    admin: false,
    name: "Mariaki",
    username: "mariakin123",
    email: "name@provider.com",
    status: "active",
    favoriteFruits: ["apple", "kiwi", "bananna"],
    privateData: false,
  },
  {
    admin: false,
    name: "Arnold",
    username: "arnoldsefu",
    email: "name@provider.com",
    status: "active",
    favoriteFruits: ["orange", "pears", "lime"],
    privateData: true,
  },
];

const ads = [
  "https://placehold.it/300x300",
  "https://source.unsplash.com/300x300",
];

const adSpace = document.querySelector("#adSpace");

adSpace.innerHTML = `
<img
src="${ads[Math.floor(Math.random() * ads.length)]}"
alt="ad1"
class="img-responsive"
/>
`;

/* 
Math - contine toate metodele de mate din javascript
.random() - genereaza un numar aleatoriu intre 0 si 1
.floor(NUMAR) - rotunjeste NUMAR in jos
*/

const openNotifications = document.querySelector("#notificationIcon");
const headerDD = document.querySelectorAll(".dropdown");

openNotifications.addEventListener(`click`, function () {
  for (let i = 0; i < headerDD.length; i++) {
    if (headerDD[i].classList.contains("notification")) {
      if (headerDD[i].style.display === "none") {
        headerDD[i].style.display = "block";
      } else {
        headerDD[i].style.display = "none";
      }
    }
  }
});

const openMessages = document.querySelector("#messagesIcon");

openMessages.addEventListener(`click`, function () {
  for (let i = 0; i < headerDD.length; i++) {
    if (headerDD[i].classList.contains("messages")) {
      if (headerDD[i].style.display === "none") {
        headerDD[i].style.display = "block";
      } else {
        headerDD[i].style.display = "none";
      }
    }
  }
});

const openSettings = document.querySelector("#settingsIcon");

openSettings.addEventListener(`click`, function () {
  for (let i = 0; i < headerDD.length; i++) {
    if (headerDD[i].classList.contains("settings"))
      if (headerDD[i].style.display === "none") {
        headerDD[i].style.display = "block";
      } else {
        headerDD[i].style.display = "none";
      }
  }
});
