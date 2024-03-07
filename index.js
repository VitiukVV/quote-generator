const quoteConatiner = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show new quote
const newQuote = () => {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author exist
    !quote.author
        ? (quoteText.innerText = "Unknown")
        : (authorText.innerText = quote.author);

    // Check Quote length to determine styling
    quote.text.length > 120
        ? quoteText.classList.add("long-quote")
        : quoteText.classList.remove("long-quote");

    quoteText.innerText = quote.text;
};

// Get Quotes frim API
const getQuotes = async () => {
    const apiUrl =
        "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    try {
    } catch (error) {
        alert(`We have some error : ${error}`);
    }
};

// Tweet Quote
const tweetQuote = () => {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, "_blank");
};

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
