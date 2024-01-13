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
var gameboardEL = document.querySelector(".gameboard");
var gameboardDisplayEl = document.querySelector(".gameboard__display");
// var gameboardDisplayEl = [];
// gameboardDisplayEl[0] = document.querySelector(".gameboard__display__q1");
var gameboardDisplayQ1El = document.querySelector(".gameboard__display__q1");
var gameboardDisplayQ1ChoicesEl = document.querySelector(
  ".gameboard__display__q1__container"
);
var gameboardDisplayQ2El = document.querySelector(".gameboard__display__q2");
var gameboardDisplayQ1ChoicesEl = document.querySelector(
  ".gameboard__display__q2__container"
);
var gameboardDisplayQ3El = document.querySelector(".gameboard__display__q3");
var gameboardDisplayQ3ChoicesEl = document.querySelector(
  ".gameboard__display__q3__container"
);
var gameboardDisplayQ4El = document.querySelector(".gameboard__display__q4");
var gameboardDisplayQ4ChoicesEl = document.querySelector(
  ".gameboard__display__q4__container"
);
var gameboardDisplayQ5El = document.querySelector(".gameboard__display__q5");
var gameboardDisplayQ5ChoicesEl = document.querySelector(
  ".gameboard__display__q5__container"
);
var gameboardResultEl = document.querySelector(".gameboard__result");
var allDoneEl = document.querySelector(".alldone");
var allDoneFinalScore = document.querySelector(".alldone__finalscore");
var initialsInput = document.getElementById("initials");

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
var correctAnswer = 0;
var incorrectAnswer = 0;
var currentQuestionIndex;

/*
 4. Declare variables: constants
    - What are the data the application needs that won't change?
    - e.g. Math constants, pre-created content (maybe the questions and answers?)
*/

var kDuration = 30;

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

/*
 6. Refactor & Helper functions
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/
