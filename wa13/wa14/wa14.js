
/* pop-up box */
/* getting the other things from the html becuase we use .getelementbyid, so grabs html stuff with matching ids and then js can control it*/
let popUp = document.getElementById("breakPopUp");
let dismissButton = document.getElementById("closePopup"); /*close button on popup*/

/* pop-up appear after a certain amount of time- 1 second */
setTimeout(function () {
    popUp.classList.remove("hide"); // removes hide so then it can show box
}, 1000);
/* dismiss button- when close is cliked this runs-adds hide back to pop up so it disappears*/
dismissButton.addEventListener("click", function() {
    popUp.classList.add("hide"); // hide box
});
