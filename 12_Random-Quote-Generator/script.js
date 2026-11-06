const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");
const userId = document.getElementById("userId");

async function getRandomQuote() {
    try{
        // Step 1. Fetch API data
        const response = await fetch("https://dummyjson.com/quotes/random?utm_source=chatgpt.com");

        console.log(response);

        // Step 2: Convert response into Json
        const data = await response.json();

        // Step 3: Display quote
        quote.textContent = data.quote;
        console.log(data);

        // Step 4: Display Author
        author.textContent = ` - ${data.author}`;
        author.style.color="red";

        userId.textContent = `quote ID ${data.id}`;
    } catch(error){
        console.log(error);
    }
}

//Button Click
newQuote.addEventListener("click", getRandomQuote);

// Load first quote automatically
getRandomQuote();