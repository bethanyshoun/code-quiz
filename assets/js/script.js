//Getting needed elements from HTML
var question = document.getElementById("question");
    console.log(question);
var choiceList = Array.from(document.getElementsByClassName("choice-text"));
//Variables for while quiz is running
var countdown = 5;
var currentQuestion = {};
var questionCounter = 0;
var acceptingAnswers = true;
var availableQuestions = [];
var inncorrectDeduction = -5;
var maxQuestions = 5;

//Questions Array ✔️
var myQuestions= [
    {
        //`number: 1,
        question: "Which is NOT a JavaScript data type?",
        choice1: "Boolean",
        choice2: "String",
        choice3: "Number",
        choice4: "Declaration",
        correct: "4",
    },
    {
        //number: 2,
        question: "What are variables in JavaScript?",
        choice1: "Assignment operators",
        choice2: "Containers that store data values",
        choice3: "Browser developer tools",
        choice4: "Programming lannguages",
        correct: "2",
    },
    {
        //number: 3, 
        question:"What is a function in JavaScript?",
        choice1: "A list containing multiple vlaues",
        choice2: "An object passed through curly brackets",
        choice3: "A parameter with a keyword and value",
        choice4: "A block of code designed to perform a given task",
        correct: "4",
    }, 
    {
        //number: 4,
        question:"Items in arrays are numbered. This number is called the item's _____.",
        choice1: "Index",
        choice2: "Math Floor",
        choice3: "Property",
        choice4: "Value",
        correct: "1",
    }, 
    {
        //number: 5,
        question:"Which type of brackets are used to define the paremeters of a function in JavaScript?",
        choice1: "<>",
        choice2: "{}",
        choice3: "()",
        choice4: "[]",
        correct: "3"
    }
    
];
/* commented out different version of array
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
*/

/*
//buttons for answer choices
var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var choice4 = document.getElementById("btn4");
*/
//Creating variables for needed elements ✔️
var startButton = document.getElementById("startBtn")
//When clicking "Start Quiz" on start page ✔️
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
startQuiz();
})

//Begin Quiz
var startQuiz = function() {
        //Run countdown timer when taken to questions ✔️
        var startTimer = setInterval(function() {
            document.getElementById("countdown").innerHTML=countdown; 
            countdown--;
            if (countdown === 0) {
                clearInterval(startTimer);
                //var timesUp = document.querySelector(".timesup")
                //timesUp.classList.add("timesup")
                
            }
        }, 1000);
    
    availableQuestions = [... myQuestions];
    console.log(availableQuestions);
    getNewQuestion();
    /*
    //SOMETHING HERE
    var output = [];
    var choices; 
    */
    /*
    //Show Questions
        for (var i=0; i <myQuestions.length; i++) {
            var thisItem = myQuestions[i];
            console.log(thisItem);
            choices = [];
        }
    //console.log(myQuestions.question);
    */

};

var getNewQuestion = function() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        //suggested converting to arrow function for functionality
        choiceList.forEach(choice => {
            var number = choice.dataset['number'];
            choice.innerText = currentQuestion["choice" + number];
            console.log(choice);
        });
    
};
