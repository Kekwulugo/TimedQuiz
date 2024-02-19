// add variables that keep track of the quiz "state"
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// add variables to reference DOM elements
// example is below
let questionsEl = document.getElementById('questions');
let screenClear = document.querySelector(".start");
let timer = document.getElementById("time");
let questionTitle = document.getElementById("question-title");
let choiceButtons = document.getElementById("choices");
let choicesEl = document.querySelectorAll("button");
let finalScore = document.getElementById("end-screen");
let startBtn =document.getElementById("start");
let submitBtn = document.getElementById("submit");


// reference the sound effects
let sfxRight = new Audio('assets/sfx/correct.wav');
let sfxWrong = new Audio('assets/sfx/incorrect.wav');

function startQuiz() {
  // hide start screen
  screenClear.classList.remove("start");
  screenClear.classList.add("hide");


  // un-hide questions section
  questionsEl.classList.remove("hide");
  questionsEl.classList.add("start");

  // start timer
  setInterval(function(){
  time --;
  },1000)

  // show starting time
  timer.innerHTML = time;


  // call a function to show the next question
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  let question = questions[currentQuestionIndex];

  // update title with current question
  questionTitle.innerHTML = question.title; 
  

  // clear out any old question choices

  // loop over the choices for each question
  // get the number of questions
  let numberOfQuestions = questions.length; // assign it the value of the length of the questions array
  for (let i = 0; i < numberOfQuestions; i++) {

    // create a new button for each choice, setting the label and value for the button
    const newBtnOne = document.createElement("button");
    newBtnOne.setAttribute("label",questions[i].choices[0]);
    newBtnOne.setAttribute("value",questions[i].choices[0]);
    newBtnOne.textContent = questions[i].choices[0];
    
    //display the choice button on the page
    choiceButtons.appendChild(newBtnOne);
  }
}

function questionClick(event) {
  // identify the targeted button that was clicked on
 
 

  // if the clicked element is not a choice button, do nothing.
  
  
  // check if user guessed wrong
  if (answer != questions[currentQuestionIndex].answer) {
  // if they got the answer wrong, penalize time by subtracting 15 seconds from the timer
  time - 15
  // recall the timer is the score they get at the end

  // if they run out of time (i.e., time is less than zero) set time to zero so we can end quiz
  if(time < 0){
    time = 0;
  };


  // display new time on page
  timer.innerHTML = 0;

  // play "wrong" sound effect
  let incorrectAudio = incorrect.wav;
  incorrectAudio.play();


  // display "wrong" feedback on page
  let feedback = document.createElement("p");
  feedback.setAttribute("class","feedback");
  questionsEl.appendChild(feedback);


} else {
  // play "right" sound effect
  let correctAudio = correct.wav;
  correctAudio.play();


  // display "right" feedback on page by displaying the text "Correct!" in the feedback element
  let correctFeeback = document.createElement("p");
  correctFeeback.setAttribute("class","feedback");
  questionsEl.appendChild(correctFeeback);

}
}
// flash right/wrong feedback on page for half a second
// set the feedback element to have the class of "feedback"


// after one second, remove the "feedback" class from the feedback element

// move to next question
currentQuestionIndex++;

// check if we've run out of questions
// if the time is less than zero and we have reached the end of the questions array,
// call a function that ends the quiz (quizEnd function)
// or else get the next question


// define the steps of the QuizEnd function...when the quiz ends...
function quizEnd() {
  // stop the timer

  // show end screen
  finalScore.setAttribute("class","start");

  // show final score
  

  // hide the "questions" section
  questionsEl.setAttribute("class","hide");
}

// add the code in this function to update the time, it should be called every second
function clockTick() {
  // right here - update time

  // update the element to display the new time value

  // check if user ran out of time; if so, call the quizEnd() function

}

// complete the steps to save the high score
function saveHighScore() {

  // get the value of the initials input box

  // make sure the value of the initials input box wasn't empty

  // if it is not, check and see if there is a value of high scores in local storage

  // if there isn't any, then create a new array to store the high score

  // add the new initials and high score to the array

  // convert the array to a piece of text

  // store the high score in local storage

  // otherwise, if there are high scores stored in local storage,
  // retrieve the local storage value that has the high scores,
  // convert it back to an array,
  // add the new initials and high score to the array,
  // then convert the array back to a piece of text,
  // then store the new array (converted to text) back in local storage

  // finally, redirect the user to the high scores page.

}

// use this function when the user presses the "enter" key when submitting high score initials
function checkForEnter(event) {
  // if the user presses the enter key, then call the saveHighscore function
}

// user clicks button to submit initials
submitBtn.onclick = saveHighScore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// user clicks on an element containing choices
choicesEl.onclick = questionClick;

//initialsEl.onkeyup = checkForEnter;