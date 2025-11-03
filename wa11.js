
async function searchBooks() {
  const query = document.querySelector("#searchInput").value.trim();
  const displayDiv = document.querySelector("#display");
  const status = document.querySelector("#status");

  if (!query) {
    displayDiv.textContent = "Please enter a book title.";
    status.textContent = "Please enter a title";
    return;
  }

  displayDiv.textContent = "";
  status.textContent = "Sending request to API...";

  try {
    const response = await fetch (`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Network error");

    const data = await response.json();
    displayResults(data.docs);
    status.textContent = "Done, displaying results below";
 }  catch (error) {
    displayDiv.textContent = "Error fetching. Try again later.";
    status.textContent = "Something went wrong. Try again later.";
    console.error(error);
    }
}

    function displayResults(books){
        const displayDiv =document.querySelector("#display");
        displayDiv.innerHTML = "";

        if (!books || books.length === 0){
        displayDiv.textContent = "No books found.";
        return;
        }
    }

