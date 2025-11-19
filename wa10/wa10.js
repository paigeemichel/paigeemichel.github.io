const factBtn = document.querySelector("#js-new-quote")
const factText = document.querySelector("#js-quote-text");
const catImage = document.querySelector("#cat-image");

const endpoint = "https://cat-fact.herokuapp.com/facts";

async function getFact() {

        try {
            const factRes =await fetch ("https://cat-fact.herokuapp.com/facts/random");
            const factData = await factRes.json();
            factText.textContent = factData.text
        } catch (error) {
            console.error("Error fetching fact!:", error);
            }
        }





factBtn.addEventListener("click", getFact);

getFact();