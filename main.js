"use strict";
import Deck from "./deck.js";
const suits = ["🔹diamonds", "♣clubs", "❤hearts", "♠spades"];
const ranks = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
];

//instans
const deck = new Deck();
//variabler
let createBTN = document.getElementById("createDeck_btn");
let shuffleBTN = document.getElementById("shuffleDeck_btn");
let dealBTN = document.getElementById("dealHand_btn");
let sortBTN = document.getElementById("sortDeck_btn");
let resetBTN = document.getElementById("resetDeck_btn");
let outPut = document.getElementById("message");

//eventlyssnare
//skapa kortlek
createBTN.addEventListener("click", function () {
  deck.createDeck(suits, ranks);
  outPut.innerHTML = "Kortlek skapad!";
  console.log(deck);
  //disable create knapp så att inte fler kort läggs till i kortleken
  createBTN.disabled = true;
});
//blanda kortlek
shuffleBTN.addEventListener("click", function () {
  deck.shuffle();
  outPut.innerHTML = "Kortlek blandad!";
  console.log(deck);
});
//ta ett kort
dealBTN.addEventListener("click", function () {
  deck.deal();
  outPut.innerHTML = "Kort taget!";
});
//sortera
sortBTN.addEventListener("click", function () {
  deck.sortDeck();
  console.log(deck);
  outPut.innerHTML = "Kortlek sorterad!";
});
//ladda om sidan
resetBTN.addEventListener("click", function () {
  //ladda om sidan
  window.location.reload();
});
