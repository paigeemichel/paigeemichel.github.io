const factBtn = document.querySelector("#js-new-quote")
const factText = document.querySelector("#js-quote-text");
const catImage = document.querySelector("#cat-image");
//triviaBtn.addEventListener("click", newFact);

//let answerBtn = document.querySelector("#js-new");
//answerBtn.addEventListener("click", newAnswer);
//addEventListener('click', newAnswer);

//let current = {
   // question: "",
    //answer: "",
//}

const endpoint = "https://cat-fact.herokuapp.com/facts";

async function getFact() {
    // console.log("Success");

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
        //const response = await fetch(endpoint);
        //if(!response.ok) {
            //throw Error(response.statusText);
       // }
       // const data = await response.json();
        //console.log(json);
        //const facts= data.all
       // displayTrivia(json["question"]);
       // current.question =json["question"];
       // current.answer = json["answer"];
        // console.log(current.question);
        // console.log(current.answer);
       // } catch (err) {
      //  console.log(err)
       // alert("Failed to get new trivia");
   // }
//}

//function displayTrivia(question) {
    //const questionText = document.querySelector("#js-quote-text");
    //const answerText = document.querySelector("#js-answer-text");
    //questionText.textContent = question;
    //answerText.textContent = "";
//}

//function newAnswer() {
    // console.log("success ==answer!");
  //  const answerText =document.querySelector("#js-answer-text");
   // answerText.textContent =current.answer;
//}

//newTrivia();