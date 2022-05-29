var countdown = 90; 

var questions =[
    {
        header:"Question 1",
        choices: [
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 4"
        ]
    },
    {
        header:"Question 2",
        choices: [
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 4"
        ]
    },
    {
        header:"Question 3",
        choices: [
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 4"
        ]
    }, 
    {
        header:"Question 4",
        choices: [
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 4"
        ]
    }, 
    {
        header:"Question 5",
        choices: [
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 4"
        ]
    }
];
var showQuestions = function() {
    console.log(questions[0].header);
    var interval = setInterval(function() {
        document.getElementById("countdown").innerHTML=countdown; 
        countdown--;
        if (count === 0){
            clearInterval(interval);
            document.getElementById("countdown").innerHTML="Done";
            alert("You're out of time!");
        }
    }, 1000);
}

//Start Button
var startButton = document.getElementById("startBtn")
    //console.log(startButton);

startButton.addEventListener("click", function() {
    var startPage = document.querySelector(".start-page")
    
    startPage.classList.add("hide")

    var quizSection = document.getElementById("quiz")
        console.log(quizSection);
        //remove HIDE from quiz
        quizSection.classList.remove("hide")

showQuestions();

})



//Timer begins counting back when start button is pushed

// Question with answer choices appears


//IF answer is incorrect time is subtracted from the clock AND INCORRECT appears on page

//If answer is correct then CORRECT appears on page

//Subsequent questions appear with same conditions

//When all questions are answered OR the timeer reaches 0 the game is over

//The score is the amount of time left on the clock

//PLayer initials and score can be saved (HIGH SCORE)