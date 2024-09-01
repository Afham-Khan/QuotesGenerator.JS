const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://stoic-quotes.com/api/quote";

async function getquote() {
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        // Display the quote and author on the web page
        quote.textContent = `"${data.text}"`;
        author.textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        quote.textContent = "Could not fetch quote. Please try again later.";
        author.textContent = "";
    }
}

// Initial call to display a quote when the page loads
getquote();

function facebook(){
  
    

    window.open ("https://www.facebook.com/sharer/sharer.php?u=https://example.com&" + quote.innerHTML, "facebook window","width=600,height=300"); 
   
}

    
  
