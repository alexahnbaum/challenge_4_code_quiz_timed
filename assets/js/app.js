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
var initialsHighscoreEl = document.getElementById("initials-highscore");
// var highscoresListEl = document.getElementById("#highscores-list");
var highscoresBackEl = document.getElementById("#go_back");
var highscoresClearEl = document.getElementById("#clear_highscores");
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
// question 2
var gameboardDisplayQ2El = document.querySelector(".gameboard__display__q2");
var gameboardDisplayQ2ChoicesEl = document.querySelector(
  ".gameboard__display__q2__container"
);
var gameboardQ2correctEl = document.getElementById("#curly_brackets");
var gameboardQ2incorrectEl = [
  'document.getElementByID("#quotes")',
  'document.getElementByID("#parenthesis")',
  'document.getElementByID("#square_brackets")',
];
// question 3
var gameboardDisplayQ3El = document.querySelector(".gameboard__display__q3");
var gameboardDisplayQ3ChoicesEl = document.querySelector(
  ".gameboard__display__q3__container"
);
var gameboardQ3correctEl = document.getElementById("#all_of_the_above");
var gameboardQ3incorrectEl = [
  'document.getElementByID("#numbers_and_strings")',
  'document.getElementByID("#other_arrays")',
  'document.getElementByID("#booleans_second")',
];
// question 4
var gameboardDisplayQ4El = document.querySelector(".gameboard__display__q4");
var gameboardDisplayQ4ChoicesEl = document.querySelector(
  ".gameboard__display__q4__container"
);
var gameboardQ4correctEl = document.getElementById("#quotes_second");
var gameboardQ4incorrectEl = [
  'document.getElementByID("#commas")',
  'document.getElementByID("#curly_brackets_second")',
  'document.getElementByID("#parenthesis_second")',
];
// question 5
var gameboardDisplayQ5El = document.querySelector(".gameboard__display__q5");
var gameboardDisplayQ5ChoicesEl = document.querySelector(
  ".gameboard__display__q5__container"
);
var gameboardQ5correctEl = document.getElementById("#console_log");
var gameboardQ5incorrectEl = [
  'document.getElementByID("#JavaScript")',
  'document.getElementByID("#terminal_/_bash")',
  'document.getElementByID("#for_loops")',
];
// Other DOM hooks
var gameboardResultEl = document.querySelector(".gameboard__result");
var allDoneEl = document.querySelector(".alldone");
var allDoneFinalScoreEl = document.querySelector(".alldone__finalscore");
var initialsInputEl = document.querySelector("#initials");
var submitEl = document.getElementById("#submit");

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

var kDuration = 60;

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

  event;
  if (!timer) {
    //set time
    timeLeft = kDuration;

    //start timer
    timer = setInterval(handleTimerTick, 1000);

    //hide welcome element
    welcomeEl.setAttribute("style", "display:none");

    //show question 1
    gameboardDisplayQ1El.setAttribute("style", "display:block");

    //click answer choices for QUESTION 1

    gameboardDisplayQ1ChoicesEl.addEventListener("click", function (event) {
      // Answer choice C is correct
      var element1 = event.target;

      // Point distribution and next page
      if (element1.matches("#alerts")) {
        correctAnswer++;
        gameboardDisplayQ1El.setAttribute("style", "display:none");
        gameboardDisplayQ2El.setAttribute("style", "display:block");
      }
      if (element1.matches("#strings")) {
        correctAnswer--;
        gameboardDisplayQ1El.setAttribute("style", "display:none");
        gameboardDisplayQ2El.setAttribute("style", "display:block");
      }
      if (element1.matches("#booleans")) {
        correctAnswer--;
        gameboardDisplayQ1El.setAttribute("style", "display:none");
        gameboardDisplayQ2El.setAttribute("style", "display:block");
      }
      if (element1.matches("#numbers")) {
        correctAnswer--;
        gameboardDisplayQ1El.setAttribute("style", "display:none");
        gameboardDisplayQ2El.setAttribute("style", "display:block");
      }

      // Incorrect time deduction
      if (element1.matches("#strings") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element1.matches("#booleans") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element1.matches("#numbers") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element1.matches("#strings") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element1.matches("#booleans") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element1.matches("#numbers") && timeLeft < 10) {
        timeLeft = 1;
      }

      // Check points for correct answer
      console.log(correctAnswer);
    });

    //click answer choices for QUESTION 2

    gameboardDisplayQ2ChoicesEl.addEventListener("click", function (event) {
      // Answer choice B is correct
      var element2 = event.target;

      // Point distribution and next page
      if (element2.matches("#curly_brackets")) {
        correctAnswer++;
        gameboardDisplayQ2El.setAttribute("style", "display:none");
        gameboardDisplayQ3El.setAttribute("style", "display:block");
      }
      if (element2.matches("#quotes")) {
        correctAnswer--;
        gameboardDisplayQ2El.setAttribute("style", "display:none");
        gameboardDisplayQ3El.setAttribute("style", "display:block");
      }
      if (element2.matches("#parenthesis")) {
        correctAnswer--;
        gameboardDisplayQ2El.setAttribute("style", "display:none");
        gameboardDisplayQ3El.setAttribute("style", "display:block");
      }
      if (element2.matches("#square_brackets")) {
        correctAnswer--;
        gameboardDisplayQ2El.setAttribute("style", "display:none");
        gameboardDisplayQ3El.setAttribute("style", "display:block");
      }

      // Incorrect time deduction
      if (element2.matches("#quotes") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element2.matches("#parenthesis") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element2.matches("#square_brackets") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element2.matches("#quotes") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element2.matches("#parenthesis") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element2.matches("#square_brackets") && timeLeft < 10) {
        timeLeft = 1;
      }

      // Check points for correct answer
      console.log(correctAnswer);
    });

    //click answer choices for QUESTION 3

    gameboardDisplayQ3ChoicesEl.addEventListener("click", function (event) {
      // Answer choice D is correct
      var element3 = event.target;

      // Point distribution and next page
      if (element3.matches("#all_of_the_above")) {
        correctAnswer++;
        gameboardDisplayQ3El.setAttribute("style", "display:none");
        gameboardDisplayQ4El.setAttribute("style", "display:block");
      }
      if (element3.matches("#numbers_and_strings")) {
        correctAnswer--;
        gameboardDisplayQ3El.setAttribute("style", "display:none");
        gameboardDisplayQ4El.setAttribute("style", "display:block");
      }
      if (element3.matches("#other_arrays")) {
        correctAnswer--;
        gameboardDisplayQ3El.setAttribute("style", "display:none");
        gameboardDisplayQ4El.setAttribute("style", "display:block");
      }
      if (element3.matches("#booleans_second")) {
        correctAnswer--;
        gameboardDisplayQ3El.setAttribute("style", "display:none");
        gameboardDisplayQ4El.setAttribute("style", "display:block");
      }

      // Incorrect time deduction
      if (element3.matches("#numbers_and_strings") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element3.matches("#other_arrays") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element3.matches("#booleans_second") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element3.matches("#numbers_and_strings") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element3.matches("#other_arrays") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element3.matches("#booleans_second") && timeLeft < 10) {
        timeLeft = 1;
      }

      // Check points for correct answer
      console.log(correctAnswer);
    });

    //click answer choices for QUESTION 4

    gameboardDisplayQ4ChoicesEl.addEventListener("click", function (event) {
      // Answer choice C is correct
      var element4 = event.target;

      // Point distribution and next page
      if (element4.matches("#quotes_second")) {
        correctAnswer++;
        gameboardDisplayQ4El.setAttribute("style", "display:none");
        gameboardDisplayQ5El.setAttribute("style", "display:block");
      }
      if (element4.matches("#commas")) {
        correctAnswer--;
        gameboardDisplayQ4El.setAttribute("style", "display:none");
        gameboardDisplayQ5El.setAttribute("style", "display:block");
      }
      if (element4.matches("#curly_brackets_second")) {
        correctAnswer--;
        gameboardDisplayQ4El.setAttribute("style", "display:none");
        gameboardDisplayQ5El.setAttribute("style", "display:block");
      }
      if (element4.matches("#parenthesis_second")) {
        correctAnswer--;
        gameboardDisplayQ4El.setAttribute("style", "display:none");
        gameboardDisplayQ5El.setAttribute("style", "display:block");
      }

      // Incorrect time deduction
      if (element4.matches("#commas") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element4.matches("#curly_brackets_second") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element4.matches("#parenthesis_second") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element4.matches("#commas") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element4.matches("#curly_brackets_second") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element4.matches("#parenthesis_second") && timeLeft < 10) {
        timeLeft = 1;
      }

      // Check points for correct answer
      console.log(correctAnswer);
    });

    //click answer choices for QUESTION 5

    gameboardDisplayQ5ChoicesEl.addEventListener("click", function (event) {
      // Answer choice D is correct
      var element5 = event.target;

      // Point distribution and next page
      if (element5.matches("#console_log")) {
        correctAnswer++;
        gameboardDisplayQ5El.setAttribute("style", "display:none");
        handleGameEnds();
      }
      if (element5.matches("#JavaScript")) {
        correctAnswer--;
        gameboardDisplayQ5El.setAttribute("style", "display:none");
        handleGameEnds();
      }
      if (element5.matches("#terminal_bash")) {
        correctAnswer--;
        gameboardDisplayQ5El.setAttribute("style", "display:none");
        handleGameEnds();
      }
      if (element5.matches("#for_loops")) {
        correctAnswer--;
        gameboardDisplayQ5El.setAttribute("style", "display:none");
        handleGameEnds();
      }

      // Incorrect time deduction
      if (element5.matches("#JavaScript") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element5.matches("#terminal_bash") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element5.matches("#for_loops") && timeLeft > 10) {
        timeLeft -= 9;
      }
      if (element5.matches("#JavaScript") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element5.matches("#terminal_bash") && timeLeft < 10) {
        timeLeft = 1;
      }
      if (element5.matches("#for_loops") && timeLeft < 10) {
        timeLeft = 1;
      }

      // Check points for correct answer
      console.log(correctAnswer);
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
  timerEl.setAttribute("style", "display:none");
  allDoneEl.setAttribute("style", "display:block");

  console.log("game ended");

  // alldone.div stating what user's final score is
  var yourFinalScore = correctAnswer;
  document.querySelector("#alldone-finalscore").textContent = yourFinalScore;

  // All Done Element
  allDoneEl.addEventListener("click", function (event) {
    var submitClick = event.target;

    if (submitClick.matches("#submit")) {
      allDoneEl.setAttribute("style", "display:none");
      highscoresEl.setAttribute("style", "display:block");
      displayInitialsScore();

      // document.querySelector("#highscores-list").textContent = correctAnswer;

      //   initialsHighscoreEl;
      var clearHighscoresButton = document.querySelector("#clear_highscores");
      clearHighscoresButton.addEventListener("click", computeHighscore);
    }

    //  var typedInitials = initialsInputEl.value;
    //  console.log(typedInitials);
  });

  function computeHighscore() {
    console.log("clear high scores");
    document.querySelector("#highscores-list").textContent = "";
  }

  // User types initials
  function displayInitialsScore() {
    var typedInitials = initialsInputEl.value;
    console.log(typedInitials);
    document.querySelector("#initials-highscore").textContent =
      typedInitials + "-" + correctAnswer;

    // Created variable to send to local storage of initials and score
    if (typedInitials !== "") {
      var dataInitialsScore =
        JSON.parse(localStorage.getItem("highscore")) || [];
      // document.querySelector("#initials-highscore").textContent =
      //   dataInitialsScore;
    }
    //  var dataInitialsScore = typedInitials + "-" + correctAnswer;
    var dataScore = {
      initials: typedInitials,
      score: correctAnswer,
    };
    dataInitialsScore.push(dataScore);
    console.log(dataInitialsScore);

    localStorage.setItem("highscore", JSON.stringify(dataInitialsScore));

    renderFinalScores();
  }
}

function renderFinalScores() {
  var dataInitialsScore = JSON.parse(localStorage.getItem("highscore")) || [];
  console.log(dataInitialsScore);
  dataInitialsScore.sort(function (a, b) {
    return b.score - a.score;
  });
  for (let i = 0; i < dataInitialsScore.length; i += 1) {
    var liEl = document.createElement("li");
    liEl.textContent =
      "initials: " +
      dataInitialsScore[i].initials +
      "-" +
      "score: " +
      dataInitialsScore[i].score;
    initialsHighscoreEl.append(liEl);
  }
}

// Check to see if there is a high score in local storage
// If no, set score to high score in local storage
//  if (localStorage.getItem("highscore") === false) {
//    document.querySelector("#initials-highscore").textContent =
//      dataInitialsScore;
//  }

// If yes, check if high score from local storage is greater than current score
//   if (
//     localStorage.getItem("highscore") === true &&
//     dataInitialsScore > correctAnswer
//   ) {
//     document.querySelector("#initials-highscore").textContent =
//       dataInitialsScore;
//   } else {
//     document.querySelector("#initials-highscore").textContent =
//       typedInitials + "-" + correctAnswer;
//   }
// }

// Go back and clear highscore buttons
highscoresEl.addEventListener("click", function (event) {
  var backClear = event.target;

  if (backClear.matches("#clear_highscores")) {
    initialsHighscoreEl.setAttribute("style", "disaply:none");
  }

  if (backClear.matches("#go_back")) {
    location.replace(location.href);
  }
});
// }

/*
 6. Refactor & Helper functions
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/

// Start the quiz
init();
