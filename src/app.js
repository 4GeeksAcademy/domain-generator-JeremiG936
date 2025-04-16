let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max -min)) + min;
}

function getRandom (arr) {
  let min = 0;
  let max = arr.length;
  let index = randomNumber(0, arr.length);
  return arr[index];
}

function myLoop () {
  let nestedFunction = getRandom;
  for (let i = 0; i < 8; i++) {
    let domain = getRandom(pronoun) + getRandom(adj) + getRandom(noun) +".com";
    return domain;
  }
}



window.onload = function() {
  document.querySelector('#domain').innerHTML = myLoop();
};
