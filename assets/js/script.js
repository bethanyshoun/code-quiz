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
//Latest additions
var questionTitle = document.querySelector(".question-title");
    console.log(questionTitle);
var questionResult = document.getElementById("result");
var answerChoices = document.querySelector(".answer-choices");
var choiceList  = document.querySelector(".choices");
//buttons for answer choices
var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");
var choice4 = document.getElementById("btn4");

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

//Variables for while quiz is running
var countdown = 15;
var questionNumber = 1;
var result = "";


//Begin Quiz
var showQuestions = function() {
    //SOMETHING HERE
    /*
    var myQuestions = '<div class="answer-choices"><span>'+ question[index].choices[0] +'</span></div>'
    + '<div class="answer-choices"><span>'+ question[index].choices[1] +'</span></div>'
    + '<div class="answer-choices"><span>'+ question[index].choices[2] +'</span></div>'
    + '<div class="answer-choices"><span>'+ question[index].choices[3] +'</span></div>'
    + '<div class="answer-choices"><span>'+ question[index].choices[4] +'</span></div>';
    //que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    //option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    */
    //Show Questions
        for (var i = 0; i < myQuestions.length; i++) {
            var thisItem = myQuestions[i];
            console.log(thisItem);
        }
    //console.log(myQuestions.question);

    //Run countdown timer when taken to questions
    var startTimer = setInterval(function() {
        document.getElementById("countdown").innerHTML=countdown; 
        countdown--;
        if (countdown === 0) {
            clearInterval(startTimer);
            document.getElementById("countdown");
        }
    }, 1000);


  
}
