const dogBtn = document.querySelector("#js-new-quote")
dogBtn.addEventListener("click", newDog);

let answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener("click", newAnswer);
//addEventListener('click', newAnswer);

let current = {
    question: "",
    answer: "",
}

const endpoint = "https://dog.ceo/api/breeds/image/random";

async function getData() {
    // console.log("Success");

        try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await fetch("https://dog.ceo/api/breeds/image/random");
        const result =await response.json();
        return result;
        //console.log("Random Dog JSON:", result);
        displayDogs(result.result);
        current.question =json["question"];
        current.answer = json["answer"];
        // console.log(current.question);
        // console.log(current.answer);
        } catch (err) {
        console.log(err)
        alert("Failed to get new dogs");
    }
}

function displayDog(question) {
    const questionText = document.querySelector("#js-quote-text");
    const answerText = document.querySelector("#js-answer-text");
    questionText.textContent = question;
    answerText.textContent = "";
}

function newDog() {
    // console.log("success ==answer!");
    const answerText =document.querySelector("#js-answer-text");
    answerText.textContent =current.answer;
}

newDog();