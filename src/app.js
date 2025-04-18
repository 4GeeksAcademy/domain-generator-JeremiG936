let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function myLoop () {
  let domains = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        let domain = `${p}${a}${n}.com`;
        console.log(domain);
        domains.push(domain);
      }
    }
  }

  return domains;
}



window.onload = function() {
  document.querySelector('#domain').innerHTML = myLoop();
};
