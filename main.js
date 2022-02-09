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
  CreatedMessage();
  console.log(deck);
  disableCreate();
});
//blanda kortlek
shuffleBTN.addEventListener("click", function () {
  deck.shuffle();
  shuffledMessage();
  console.log(deck);
});
//ta ett kort
dealBTN.addEventListener("click", function () {
  deck.deal();
  renderHand();
});
//sortera
sortBTN.addEventListener("click", function () {
  deck.sortDeck();
  console.log(deck);
  sortedMessage();
});
//ladda om sidan
resetBTN.addEventListener("click", function () {
  refreshPage();
});
//funktioner
function CreatedMessage() {
  outPut.innerHTML = "Kortlek skapad!";
}
function shuffledMessage() {
  outPut.innerHTML = "Kortlek blandad!";
}
function sortedMessage() {
  outPut.innerHTML = "Kortlek sorterad!";
}

//disable create knapp så att inte fler kort läggs till i kortleken
function disableCreate() {
  createBTN.disabled = true;
}
//ladda om sidan
function refreshPage() {
  window.location.reload();
}

function renderHand() {}
