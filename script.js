// script.js
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
];

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('newQuote');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
}

newQuoteButton.addEventListener('click', displayRandomQuote);

// Display initial random quote
displayRandomQuote();
