//Questions Array
var myQuestions = [
    {
        number: 1,
        question: "Which is NOT a JavaScript data type?",
        choices: [
            "1. Boolean",
            "2. String",
            "3. Number",
            "4. Declaration"
        ],
        correct: "4",
    },
    {
        number: 2,
        question: "What are variables in JavaScript?",
        choices: [
            "1. Assignment operators",
            "2. Containers that store data values",
            "3. Browser developer tools",
            "4. Programming lannguages"
        ],
        correct: "2",
    },
    {
        number: 3, 
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
        number: 4,
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
        number: 5,
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

//Creating variables for needed elements
var startButton = document.getElementById("startBtn")
    //console.log(startButton);
var countdown = 15;

//When clicking "Start Quiz" on start page
startButton.addEventListener("click", function() {
    var startPage = document.querySelector(".start-page")
    //HIDE the start page when button is clicked
    startPage.classList.add("hide")
    //call the quiz section
    var quizSection = document.getElementById("quiz")
        console.log(quizSection);
        //remove HIDE from quiz
        quizSection.classList.remove("hide")
//Display questions      
showQuestions();
})




//Begin Quiz
var showQuestions = function() {
    //Show Questions
    var questionSection = document.getElementById("question-title");
        questionSection.classList.add("question")
        console.log(this.question);
        for (var i=0; i < myQuestions.length; i++) {
        var thisItem= myQuestions[i];
           console.log(thisItem);
        }
    //console.log(myQuestions.question);
    var choice1 = document.getElementById("btn1");
    var choice2 = document.getElementById("btn2");
    var choice3 = document.getElementById("btn3");
    var choice4 = document.getElementById("btn4");
    
    //Run countdown timer when taken to questions
    var seconds = setInterval(function() {
        document.getElementById("countdown").innerHTML=countdown; 
        countdown--;
        if (countdown === 0) {
            clearInterval(seconds);
            document.getElementById("countdown");
        }
    }, 1000);


  
}
