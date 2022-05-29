
   /* for (var i=0; i < myQuestions.length; i++){
        var thisItem= myQuestions[i];
            console.log(thisItem);
    } */ //Don't really want a FOR loop here
    //myQuestions){ //, quizContainer) {
    //console.log(myQuestions[0].question);
    /***** 
    var output = [];
    var choices; 

    for (var i=0; i < myQuestions.length; i++) {
        choices = [];
        for(choices in myQuestions[i].choices){
            choices.push (
                '<label>'
                    + '<input type="submit" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + myQuestions[i].choices[letter]
                + '</label>'
            );
        }
            output.push(
                '<div class="question">' + myQuestions[i].question + '</div>'
                + '<div class="choices">' + choices.join('')+ '</div>'
            );
       //if ()
    }

    quizContainer.innerHTML = output.join(''); ******/
    /* THIS IS WHERE I AM GETTING CONFUSED
     //Questions ***THIS IS THE TRICKY PART RIGHT NOW
     availableQuestions = [ ...questions]; {
        console.log(availableQuestions);
    }
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];

    */




//Timer begins counting back when start button is pushed

// Question with answer choices appears


//IF answer is incorrect time is subtracted from the clock AND INCORRECT appears on page

//If answer is correct then CORRECT appears on page

//Subsequent questions appear with same conditions

//When all questions are answered OR the timeer reaches 0 the game is over

//The score is the amount of time left on the clock

//PLayer initials and score can be saved (HIGH SCORE)