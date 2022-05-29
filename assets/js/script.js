//Click Start Button on Start Page to begin quiz
var startButton = document.getElementById("startBtn")
    //console.log(startButton);

startButton.addEventListener("click", function() {
    var startPage = document.querySelector(".start-page")
    //HIDE the start page when button is clicked
    startPage.classList.add("hide")

    var quizSection = document.getElementById("quiz")
        console.log(quizSection);
        //remove HIDE from quiz
        quizSection.classList.remove("hide")

showQuestions();

})

var countdown = 15; 

var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var choice4 = document.getElementById("btn4");


var myQuestions = [
    {
        question:"Which is NOT a JavaScript data type?",
        choices: [
            "1. Boolean",
            "2. String",
            "3. Number",
            "4. Declaration"
        ],
        correct: "4",
    },
    {
        question:"What are variables in JavaScript?",
        choices: [
            "1. Assignment operators",
            "2. Containers that store data values",
            "3. Browser developer tools",
            "4. Programming lannguages"
        ],
        correct: "2",
    },
    {
        question:"What is a function in JavaScript?",
        choices: [
            "1. A list containing multiple vlaues",
            "2. An object passed through curly brackets",
            "3. A parameter with a keyword and value",
            "4. A block of code designed to perform a given task"
        ],
        correct: "4",
    }, 
    {
        question:"Items in arrays are numbered. This number is called the item's _____.",
        choices: [
            "1. Index",
            "2. Math Floor",
            "3. Property",
            "4. Value"
        ],
        correct: "1",
    }, 
    {
        question:"Which type of brackets are used to define the paremeters of a function in JavaScript?",
        choices: [
            "1. <>",
            "2. {}",
            "3. ()",
            "4. []"
        ],
        correct: "3"
    }
    
];

//Begin Quiz
var showQuestions = function() {
    //console.log(myQuestions.question);
    
    //Run countdown timer when taken to questions
    var seconds = setInterval(function() {
        document.getElementById("countdown").innerHTML=countdown; 
        countdown--;
        if (countdown === 0) {
            clearInterval(seconds);
            document.getElementById("countdown");
        }
    }, 1000);

    //Show Questions
    for (var i=0; i < myQuestions.length; i++) {
        var thisItem= myQuestions[i];
            console.log(thisItem);
        var questionSection = document.getElementById("question-title")
            questionSection.classList.add("question")
            console.log(this.question);
    }
}
