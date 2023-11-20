const getAuthorById = (userId) => {
  console.log("start functie");
  for (let i = 0; i < accounts.length; i++) {
    console.log("caut in index: ", i);
    if (userId === accounts[i].id) {
      console.log(accounts[i]);
      return accounts[i];
    }
  }
  return "Nu exista user cu id-ul: ", userId;
};

/* 

pe linia 1 : definim o functie care primeste un parametru (userId)
pe linia 2 : trecem prin array-ul de accounts
incepe de la i=0 
oprim for cand i este strict mai mic decat numarul elementelor din array
pe linia 3 : comparam valoarea parametului pasat functiei (userId) cu 
valoarea key-ului de Id a obiectului la care suntem in iteratie;
pe linia 4 : daca userId conicinde cu key-ul id, scoatem din functie
TOT obiectul user-ului selectat
pe linia 10 : acest lucru se executa doar daca nu ajungem la
return din linia 7

NOTA : aceasta functie returneaza date. Nu printeaza in consola

*/

console.log(getAuthorById("as2dj2kdlsffo223as2321dsad2d2g5h5"));

console.log(getAuthorById(appState.friend[0]));

for (let i = 0; i < appState.friends.length; i++) {
  console.log(getAuthorById(appState.friends[i]));
}

console.log("==== Users online ====");
for (let i = 0; i < accounts.length; i++) {
  if (accounts[i].online === true) {
    console.log(`${accounts[i].first_name} ${accounts[i].last_name}`);
  }
}

console.log("=== legal American drinkers ====");

for (let i = 0; i < accounts.length; i++) {
  if (accunts[i].age >= 21) {
    console.log(`${accounts[i].first_name} ${accounts[i].last_name}`);
  }
}

const getArticleById = (postId) => {
  for (let i = 0; i < posts.length; i++) {
    if (postId === posts[i].id) {
      return posts[i]; // la primul match iese din functie
    }
  }
  return "No article with id" + postId;
};

console.log(getArticleById("1"));

let cursWeb; // alocam spatiu in memorie
cursWeb = "da"; // adaugam informatie la adresa din memorie
console.log(cursWeb);

for (let i = 0; i < appState.articles_posted.length; i++) {
  console.log(getArticleById(appState.articles_posted[i]));
}


console.log ("=== articles posted ===")

for (let i=0; i < posts.length; i++) {
  if (posts[i].status ==== "published") {
    console.log(posts[i].title);
  }
}

console.log ('=== published or draft ====')

const getArticleByStatus = (status) => {
  for (let i=0; i < posts.length; i++) {
    if (posts[i].status ==== status) {
      console.log(posts[i].title);
    } else {
      console.log("Provide a valid status")
    }
  }
};

for (let i=0; i < appState.articles_posted.length; i++) {
  let singleArticle = getArticleById(appState.articles_posted[i]);
  let authorInfo = getAuthorById(singleArticle.author_id);
  singleArticle.author_id = authorInfo;
  console.log(singleArticle);
}