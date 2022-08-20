//the task steps:
// create object for the data using constroctir
// get 20 record from api
// push to array
// use map to put them in the card like emp
// add style

function Digimon(name, level, img) {
  this.name = name;
  this.level = level;
  this.img = img;
}

fetch("https://digimon-api.herokuapp.com/api/digimon")
  .then((result) => {
    // console.log(result);
    let myApiData = result.json();
    return myApiData;
  })
  .then((myApiData) => {
    myApiData.length = 20;
    return myApiData;
  })
  .then((myApiData) => {
    // console.log(myApiData[0]);
    showApi(myApiData);

    // using map
    /* let myMap = myApiData.map(person (element) {
      
    });
    */
  });

let cardGroupe = document.getElementById("divId");

function showApi(arr) {
  // here using for loop to show cards in dashboard
  for (let i = 0; i < arr.length; i++) {
    let card = document.createElement("div");
    // add card to cardGroupe
    cardGroupe.append(card);

    let imgDigimon = document.createElement("img");
    card.append(imgDigimon);
    imgDigimon.setAttribute("src", arr[i].img);

    let name = document.createElement("p");
    cardGroupe.append(name);
    name.textContent = arr[i].name;

    let level = document.createElement("p");
    cardGroupe.append(level);
    level.textContent = arr[i].level;
  }
}

// let card = document.createElement("div");
// // add card to cardGroupe
// cardGroupe.append(card);

// let imgDigimon = document.createElement("img");
// card.append(imgDigimon);
// imgDigimon.setAttribute("src", arr.img);

// let name = document.createElement("p");
// cardGroupe.append(name);
// name.textContent(arr.name);

// let level = document.createElement("p");
// cardGroupe.append(level);
// level.textContent(arr.level);
