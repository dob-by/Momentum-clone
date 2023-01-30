const quotes = [
  {
    quote: "Life is a series of building, testing, changing and iterating.",
    author: "Lauren Mosenthal",
  },
  {
    quote:
      "Whenever you see a successful business, someone once made a courageous decision.",
    author: "Peter Drucker",
  },
  {
    quote: "Momentum begets momentum, and the best way to start is to start.",
    author: "Gil Penchina",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D.Rockefeller",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
    author: "Reid Hoffman",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.",
    author: "Jim Rohn",
  },
  {
    quote:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "Ability can take you to the top. But it takes character to keep you there.",
    author: "Zig Ziglar",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
