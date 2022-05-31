var initialsSubmit = document.getElementById("initials")

//When clicking Submit button on End of Quiz page 
initialsSubmit.addEventListener("click", function() {
    var finishedPage = document.querySelector(".finished-page")
    //HIDE the scores list
    finishedPage.classList.add("hide")
    var highScoresSection = document.getElementById("highscores-list")
        highScoresSection.classList.remove("hide")   
    highScores();
});

var highScores = function () {

}


