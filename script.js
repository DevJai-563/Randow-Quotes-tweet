const api_url = "https://quotes-api-self.vercel.app/quote"
let quote = document.getElementById("quote")
let author = document.getElementById("author")
let app = document.getElementById("app")
app.style.display = "none"
let greeting = document.getElementById("greeting")

const  getQuote = async (api_url) => {
    
    try {
        const respo = await fetch(api_url);
        console.log(respo)

        if (!respo.ok) {
            throw new Error(`HTTP Error: ${respo.status}`);
        }

        const data = await respo.json()
        console.log(data)

        quote.innerHTML = data.quote
        author.innerHTML = "---by "+data.author

    } catch (error) {
        console.error("Error in fetching api")

        quote.innerHTML = "Not Fetched please try again later"
        author.innerHTML = "Not Fetched"
    }

}


greeting.addEventListener("click", () => {
    greeting.style.display = "none"
    
    app.style.display = "block"

    getQuote(api_url)

});


function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + author.innerHTML, "Tweet window", "width=600,height=300")
}

