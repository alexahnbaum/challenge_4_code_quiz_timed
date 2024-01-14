/*
 1. Design UI
    - Draw a picture
    - Determine where you will display feedback. 
    - Determine what is clickable, what will receive key input, change input
      timers, scroll events, etc
    - rough in the elements in HTML, style is less important

*/

/*
  2. Declare variables: DOM hooks
    - In the Javascript, create variables for each of the DOM elements that will display feedback
    - create variables for the elements that will receive input
    - set each variable to its DOM element like:
    
    var theElement = document.querySelector([CSS Selector for your element]);
 */

var welcomeEl = document.querySelector(".welcome");
var startQuizBoxEl = document.querySelector(".box__welcome");
var highscoresEl = document.querySelector(".highscores");
var highscoresListEl = document.querySelector(".highscores__list");
var timerEl = document.querySelector(".timer");
var gameboardEL = document.querySelector(".gameboard");
var gameboardDisplayEl = document.querySelector(".gameboard__display");
// question 1
var gameboardDisplayQ1El = document.querySelector(".gameboard__display__q1");
var gameboardDisplayQ1ChoicesEl = document.querySelector(
  ".gameboard__display__q1__container"
);
var gameboardQ1correctEl = document.getElementById("#alerts");
var gameboardQ1incorrectEl = [
  'document.getElementByID("#strings")',
  'document.getElementByID("#booleans")',
  'document.getElementByID("#numbers")',
];
console.log(gameboardQ1incorrectEl);
// question 2
var gameboardDisplayQ2El = document.querySelector(".gameboard__display__q2");
var gameboardDisplayQ2ChoicesEl = document.querySelector(
  ".gameboard__display__q2__container"
);
// question 3
var gameboardDisplayQ3El = document.querySelector(".gameboard__display__q3");
var gameboardDisplayQ3ChoicesEl = document.querySelector(
  ".gameboard__display__q3__container"
);
// question 4
var gameboardDisplayQ4El = document.querySelector(".gameboard__display__q4");
var gameboardDisplayQ4ChoicesEl = document.querySelector(
  ".gameboard__display__q4__container"
);
// question 5
var gameboardDisplayQ5El = document.querySelector(".gameboard__display__q5");
var gameboardDisplayQ5ChoicesEl = document.querySelector(
  ".gameboard__display__q5__container"
);
var gameboardResultEl = document.querySelector(".gameboard__result");
var allDoneEl = document.querySelector(".alldone");
var allDoneFinalScore = document.querySelector(".alldone__finalscore");
var initialsInput = document.getElementById("#initials");
var submitEl = document.querySelector(".submit");

/*
 3. Declare variables: state
    - What are the data that need to be kept track of? 
    - Global state variables sometimes emerge while working on event handlers (i.e., it
      becomes clearer what needs to be tracked across the application)
    - state variables:
      "State describes the status of the entire program or an individual
       object. It could be text, a number, a boolean, or another data type.

       It’s a common tool for coordinating code. For example, once you update state, a bunch of different functions can instantly react to that change."
       https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/
    - Does the state variable need to be global (i.e., used by all the event handlers) or does it only need to be local
      to the event handler?
*/

var timer = null;
var timeLeft = 0;
var correctAnswer = 10;
var clicks = 0;
var incorrectAnswer = 0;
var currentQuestionIndex;

/*
 4. Declare variables: constants
    - What are the data the application needs that won't change?
    - e.g. Math constants, pre-created content (maybe the questions and answers?)
*/

var kDuration = 10;

/*
 5. Identify events
    - Based on the variables created in Step 2, create event handlers

      theElement.addeventListener([EVENT TYPE], function(event){
        // do stuff here...
      })

    ...where [EVENT TYPE] is "click" or "change" or "keydown" or whatver

    - Identify the things that should happen in the click handlers
    - Rememember: there is always a page load event. Usually have a function for anything
      that needs setting up at the beginning, before people interact with the 
      page. Start the execution of this setup function at the bottom of page
*/

// Event: page load
function init() {
  console.log("Quiz loading");

  // hide highscores element
  highscoresEl.setAttribute("style", "display:none");
  // hide timer
  timerEl.setAttribute("style", "display:none");
  // hide all gameboard - all question container elements
  gameboardDisplayQ1El.setAttribute("style", "display:none");
  gameboardDisplayQ2El.setAttribute("style", "display:none");
  gameboardDisplayQ3El.setAttribute("style", "display:none");
  gameboardDisplayQ4El.setAttribute("style", "display:none");
  gameboardDisplayQ5El.setAttribute("style", "display:none");
  // hide all done element
  allDoneEl.setAttribute("style", "display:none");
}

// Event: Click starts
function handleClickStart(event) {
  console.log("Quiz started");

  if (!timer) {
    //set time
    timeLeft = kDuration;

    //start timer
    timer = setInterval(handleTimerTick, 1000);

    //hide welcome element
    welcomeEl.setAttribute("style", "display:none");

    //show question 1
    gameboardDisplayQ1El.setAttribute("style", "display:block");

    //answer to question 1

    gameboardDisplayQ1ChoicesEl.addEventListener("click", function (event) {
      // answer choice 3 is correct
      var element1 = event.target;

      if (element1.matches("#alerts")) {
        correctAnswer++;
      } else {
        incorrectAnswer++;
      }

      console.log(correctAnswer);
      console.log(incorrectAnswer);
    });
  }
}

startQuizBoxEl.addEventListener("click", handleClickStart);

// Event: Timer tick
function handleTimerTick(ev) {
  console.log("timer ticked");

  // Show timer
  timerEl.setAttribute("style", "display:block");

  timeLeft--;

  timerEl.textContent = timeLeft;

  // Show alldone element
  if (timeLeft === 0) allDoneEl.setAttribute("style", "display:block");
  if (timeLeft === 0) handleGameEnds(true);
}

// // Event: Quiz ends
function handleGameEnds() {
  clearInterval(timer);
  timer = null;

  gameboardDisplayEl.setAttribute("style", "display:none");
}

//   // Initials submitted
//   submitEl.addEventListener("click", InitialsSubmitted);
// }

// // User submitted initials
// function InitialsSubmitted(event) {
//   event.preventDefault();
//   console.log(event);
//   var userInitials = initialsInput.value;

//   // Hide alldone element
//   function hideAlldoneElement() {
//     allDoneEl.setAttribute("style", "display:none");
//   }

//   submitEl.addEventListener("click", hideAlldoneElement);

//   // Highscores element appears

//   highscoresListEl.textContent = userInitials;

//   //  function highscoresAppears() {
//   //    highscoresEl.setAttribute("style", "display:block");
//   //    highscoresListEl = userInitials;
//   //  }
// }

/*
 6. Refactor & Helper functions
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/

function updateResult() {
  //Update UI after each questions of right or wrong
}

// function hideElement(el) {
//   //Hides things
//   el.classList.add("hidden");
// }

function showElement(el) {
  //Removes hide
  el.classList.remove("hidden");
}

// Start the quiz
init();
