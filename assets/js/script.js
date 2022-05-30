//Getting needed elements from HTML
var question = document.getElementById("question");
    console.log(question);
var choiceList = Array.from(document.getElementsByClassName("choice-text"));
//Variables for while quiz is running
var countdown = 15;
var currentQuestion = {};
var questionCounter = 0;
var acceptAnswers = false;
var availableQuestions = [];
var inncorrectDeduction = -5;
var maxQuestions = 5;

//Questions Array ✔️
var myQuestions= [
    {
        question: "Which is NOT a JavaScript data type?",
        choice1: "Boolean",
        choice2: "String",
        choice3: "Number",
        choice4: "Declaration",
        correct: "4",
    },
    {
        question: "What are variables in JavaScript?",
        choice1: "Assignment operators",
        choice2: "Containers that store data values",
        choice3: "Browser developer tools",
        choice4: "Programming lannguages",
        correct: "2",
    },
    {
        question:"What is a function in JavaScript?",
        choice1: "A list containing multiple vlaues",
        choice2: "An object passed through curly brackets",
        choice3: "A parameter with a keyword and value",
        choice4: "A block of code designed to perform a given task",
        correct: "4",
    }, 
    {
        question:"Items in arrays are numbered. This number is called the item's _____.",
        choice1: "Index",
        choice2: "Math Floor",
        choice3: "Property",
        choice4: "Value",
        correct: "1",
    }, 
    {
        question:"Which type of brackets are used to define the paremeters of a function in JavaScript?",
        choice1: "<>",
        choice2: "{}",
        choice3: "()",
        choice4: "[]",
        correct: "3"
    }
    
];

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
            if (countdown === -1) {
                clearInterval(startTimer);   
            }
            if (countdown === -1) {
                window.alert("Time is Up!");
                return window.location.assign("./highscores.html");
            }
        }, 1000);
    
    availableQuestions = [... myQuestions];
    console.log(availableQuestions);
    getNewQuestion();

};

var getNewQuestion = function() {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions)
        return window.location.assign("./highscores.html");

    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        //VS code suggested converting to arrow function for functionality
        choiceList.forEach(choice => {
            var number = choice.dataset['number'];
            choice.innerText = currentQuestion["choice" + number];
            console.log(choice);
        });

    availableQuestions.splice(questionIndex, 1);

    //Allow user to answer questions (once all is loaded)
    acceptAnswers = true;
};
 //Click to reference choice user selects   
choiceList.forEach(choice => {
    choice.addEventListener("click", function(){
        //if not ready to accept answers
        if(!acceptAnswers) return;
        acceptAnswers = false;
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.dataset["number"];
            console.log(selectedAnswer);

    getNewQuestion();

    });
});
    

