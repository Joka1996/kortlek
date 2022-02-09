//const fs = require("fs");

//klass för korten
class Card {
  constructor(rank, suit) {
    this.suit = suit;
    this.rank = rank;
  }
}

// klass för deck med kort
export default class Deck {
  constructor() {
    //en tom array som kan fyllas med kort.
    this.deck = [];
  }
  //skapa en kortlek
  createDeck(suits, ranks) {
    //loopa igenom bägge och lägg till i deck
    for (let suit of suits) {
      for (let rank of ranks) {
        this.deck.push(new Card(rank, suit));
      }
    }
    return this.deck;
  }

  //för att simpelt hämta length på array deck
  get numberOfCards() {
    return this.deck.length;
  }

  //blanda korten
  shuffle() {
    for (var i = 0; i < 52; i++) {
      // välj ett kort
      let tempCard = this.deck[i];
      //en variabel för den slumpmässiga plats som kortet flyttas till
      let randomIndex = Math.floor(Math.random() * 52);
      //byt plats
      this.deck[i] = this.deck[randomIndex];
      this.deck[randomIndex] = tempCard;
    }
    return this.deck;
  }

  //dela ut kort.
  deal() {
    //ny array
    let cardOnHand = [];
    while (cardOnHand.length < 1) {
      //flytta kort. shift för att översta kortet
      cardOnHand.push(this.deck.shift());
    }
    //skicka till nästa funktion
    this.hand(cardOnHand);
    //console.log(cardOnHand);
    return cardOnHand;
  }

  //
  hand(cardOnHand) {
    for (const card of cardOnHand) {
      console.log(card.suit, "of", card.rank);
    }

    //om en json-fil ska skapas i framtiden
    /* const jsonContent = JSON.stringify(cardOnHand);
      fs.writeFile("/hand.json", jsonContent, "utf8", function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Sparad som hand.json");
      });*/
  }

  //sortera
  sortDeck() {
    let sortedDeck = [];
    //specifiera ordningen på korten, rank
    const rankOrder = [
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
    sortedDeck.push(
      //higher order function. localeCompare
      this.deck.sort(
        (a, b) =>
          a.suit.localeCompare(b.suit) ||
          rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank)
      )
    );
    //denna fungerar också, men något längre
    //(a.suit > b.suit || (a.suit == b.suit && rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank)
    return sortedDeck;
  }
  //återställ
  resetDeck(suits, ranks) {
    //loopa igenom bägge och lägg till i deck
    for (let suit of suits) {
      for (let rank of ranks) {
        this.deck.push(new Card(rank, suit));
      }
    }
    return this.deck;
  }
}
