const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },

    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney",
    },

    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt",
    },

    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },

    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
    }

]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

const todaysQutoes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = todaysQutoes.quote;
author.innerText = todaysQutoes.author;
