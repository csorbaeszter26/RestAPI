import { getAdat } from "./sync.js";

console.log("Gipsz Jakab");

getAdat("adatok.json", megjelenit);
getAdat("https://pokeapi.co/api/v2/pokemon/ditto", okemonMEgjelenit);

console.log("Nagy Géza");

function megjelenit(adat) {
  console.log(adat);
  console.log(adat.termek);
  $("body").append(`<h1>Adatok</h1>`);
  $("body").append(`<h2>${adat.termek[0].nev}</h2>`);
}

function okemonMEgjelenit(adat) {
  console.log(adat);
  //ditto keoet es nevet szeretnem latni kiirva
  $("body").append(`<h1>Pokemon</h1>`);
  $("body").append(`<h2>${adat.name}</h2>`);
  $("body").append(`<img src="${adat.sprites.front_default}" alt="${adat.name}">`);
}
