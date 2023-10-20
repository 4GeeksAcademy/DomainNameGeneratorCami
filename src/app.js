import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

const pronouns = ["the", "your"];
const adjectives = ["awesome", "tiny"];
const nouns = ["dinosaur", "buble"];
const extensions = [".ch", ".co", ".media", ".io"];

window.onload = function() {
  const domainNamesContainer = document.querySelector(".domain-names");

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let domainName =
            pronouns[i] + adjectives[j] + nouns[k] + extensions[l];

          let domainNameElement = document.createElement("p");
          domainNameElement.textContent = domainName;

          domainNamesContainer.appendChild(domainNameElement);

          let domainHack =
            pronouns[i] + adjectives[j] + "." + nouns[k] + extensions[l];

          let domainHackElement = document.createElement("p");
          domainHackElement.textContent = domainHack;

          domainNamesContainer.appendChild(domainHackElement);
        }
      }
    }
  }
};
