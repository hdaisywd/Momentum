const quotes = [
  {
    quote: "Life is so cool!",
    author: "daisy"
  },
  {
    quote: "Life is so fun!",
    author: "gabby"
  },
  {
    quote: "Life is so happy!",
    author: "wondu"
  },
  {
    quote: "Life is so shiny!",
    author: "sunja"
  },
  {
    quote: "Life is so fabulous!",
    author: "hyungsun"
  }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;