# Challenge 4:Timed Code Quiz

Creating a timed code quiz

The purpose of this project was to create a timed quiz using Javascript. During the first 3 weeks of my bootcamp, we learned how to structure a webpage using HTML and how to give a webpage style using CSS. The point of this project was to create a functioning timed quiz with a timer, five questions containing multiple choice answer fields, the ability to enter the user's initials, show the user's intials and score, place the score in a high score list, and the ability to play the quiz again. The project was to be driven primarily with Javascript. This was the most challenging challenge for me so far in my coding boot camp. In the README file, I will explain the process of what occured during this challenge, as I realized halfway through the project that I was not utlizing the power of Javascript in a more appropriate way that would have allowed me better access to, and completion of, this project in a way that would have resulted in cleaner and more proper code. However, I did complete the challenge, and have a functioning timed code quiz. It is fun to see if functioning properly with all acceptance criteria met.

**Table of contents**

- [Motivation](#item-one)
- [What are the problems identified?](#item-two)
- [What are the solutions?](#item-three)
- [What was learned?](#item-four)
- [Usage](#item-five)
- [Credits](#item-six)
- [License](#item-seven)

---

<a id="item-one"></a>

### MOTIVATION

My motivation for making the timed code quiz was to see if I could implement the Javascript skills learned in my coding boot camp in the correct way. I needed to have welcome, question/answer, all done, and high score elements appear one after the other. These were:

- Welcome element: The user can read text explaining the rules of the quiz. A rule related to the timer is that if the user clicks a wrong answer, the timer will have 10 seconds taken off. Points for correct and incorrect answers are tallied. On the welcome element, a start quiz button is presented. When this button is clicked, the quiz starts with a timer running down from 60 to 0, and the user is taken to the first question/multiple choice answer element.
- Questions/answer elements: The user can read text of the question, then select an answer from a field of four multiple choice options. Again, if the answer is correct, the user gets a point, and if the answer is incorrect, the user gets a point taken off of their score and 10 seconds is deducted from the timer. Regardless of what their answer is, the user is then taken to the next question. All five questions are presented. At the end of the quiz, the user is taken to the all done element.
- All done element: The user can see their score and is told the quiz is done. Their is a text input field with written instructions for the user to input their initials. The user is also shown a submit button. Upon clicking the button, the user's initials and score is put into local storage. Upon clicking the button, the user is taken to the high scores element.
- High scores element: The user's score that was put into local storage is then displayed in a high score list. If there are other scores in local storage from previous plays/attempts of the quiz, the scores are listed in a high score list containing the user's initials and high score. This is done by the initials and score that were put into local storage earlier being taken out of local storage to show on the high scores list. Once this is presented,the user has the option to click on two buttons - go back or clear high scores. If the user clicks on the go back button, they are taken to the welcome element to take the quiz again. If the user clicks on the high scores button, the high score list is not shown.

<a id="item-two"></a>

### WHAT ARE THE PROBLEMS IDENTIFIED?

Because we were not given any started code for this week's challenge, the problems identified were to create the structure of the quiz in HTML, user CSS to give the quiz a style that resembled an example of the quiz in our assignment README file, and to give the quiz data-driven functionality through Javascript. Because I gained familiarity with HTML and CSS in previous challenges, the main problems I identified were realted to Javascript. They included:

- How do I proceed through all parts of the quiz? How do I get from the welcome text to the first question? How do I get from the first question to the next question? And so on.
- How do I create a timer that displays and also responds to input if the user clicks on an incorrect answer to deduct time?
- How do I keep score of a user's correct and incorrect answers?
- How do I allow the user to input their initials and have their initials and score saved to local storage?
- How do I have the user's initials and high score pulled out of local storage to display in a high score list?
- When the quiz is completed and the high scores are shown, how do I give the user the option to either clear the high scores or go back to replay/retry the quiz another time?

<a id="item-three"></a>

### WHAT ARE THE SOLUTIONS?

My boot camp professor recorded himself working on a mini-project that utilized the same Javascript-based problem solving techniques that would be required to complete this challenge, so I started off with watching the recording. It helped immensely as it pointed me in the right direction to start. Similar to previous challenges, I started with pseudo-coding. My professor shared a pseudo-coding template that I used based on what I needed to complete for this challenge The pseudo-coding template served as a guide and helped me solve the problems outlined in the above "What are the problems identified" section.

- Solution to proceeding through all parts of the quiz: What I realize now is that I should have built placeholders in my HTML file for each part of the coding quiz. However, I didn't come to this realization until I was deep within this challenge. I will apply the techniques of creating placeholders in my HTML file and creating data-driven changes within the Javascript on future challenges. However, because I was not yet aware/capable of implementing this at the time of working on this challenge, my solution to this problem was solved by creating all of the HTML elements I would need for all parts of the quiz in the HTML file. I then created Document Object Model (DOM) hooks for all of the HTML elements I needed to manipulate. I used the setAttribute method in Javascript ot make elements hide and show upon button clicks of each part of the quiz. This is how I was able to allow the user to proceed through the quiz upon clicking answer choices.

- Solution to creating a displayed timer that deducted time if a user selected an incorrecct answer: I created a placeholder HTML element with the class name of timer. In Javascript, I then created the timer and used the setAttribute method to show the timer once the user clicked the start quiz button. I then created an event listener to listen for a click on the multiple choice answer buttons of each question of the quiz. I used the match method in Javascript and an if-statement to ensure if the user clicked on an incorrect answer choice, the time left on the timer would be reduced by 10 seconds.

- Solution to keeping score of a user's correct and incorrect answers: I added an event listener for each question/multiple choice answer container to listen for clicks on the multiple choice answer buttons of each question of the quiz. I used the match method in Javascript and an if-statement to ensure if the user clicked on the correct answer they would get 1 point added to their score, and if the user clicked on an incorrect answer, they would get 1 point deducted from their score.

- Solution of how to allowing the user to input their initials into local storage and having their initials and score saved into local storage: I created an "all done" element that served as the all done page, in which I put a text input space for the user to type in their initials. At this point, I hit a roadblock and could not figure out how to have the user's initials and score saved to local storage. I went back to look at previous lessons from my boot camp, but had a hard time figuring out how to implement the content from our lessons with this challenge. I was not able to align a time to work on this challenge with my classmates, and my boot camp was closed for a holiday weekend. I therefore reached out to tutoring services and scheduled a tutor session. This tutor session helped imensely. I was able to talk through my problem with the tutor and we worked out the solution of saving the user's initials and score to local storage.

- Solution to pulling the user's initials and score out of local storage and shown in a high scores list: As mentioned in the above bullet point, my tutor session was what helped me solve the problem of local storage. During my tutor session, we created two functions that were involved in the process of taking the user's typed initials and scores, and sending them to local storage with the JSON.stringify method. Then, this data was taken out of local storage with the JSON.parse method, a for loop was written to create a list of all initials and high scores that were in local storage, and a return expression was written so that the initials and high scores would be listed in descending order with the highest score at the top.

- Solution to giving the user the option to clear the high scores list or to go back and retry the quiz again: I added an event listener on this element to listen for clicks of each button option: clear high scores and go back. I then used the match method in Javascript and an if-statemnts for each button. If the user clicked on the clear high scores element, the high scores list would be hidden with the setAttribute method. I did some research on the internet of how to make a page refresh, and created a function in JavaScript called restartQuiz which allowed me to bring the user back to the start of the quiz with a refresh. Upon researching this, I also learned that data stored in local storage was maintained, therefore the user's previous initials and scores were not erased.

<a id="item-four"></a>

### WHAT WAS LEARNED?

This challenge was extremely difficult, yet rewarding for me because I learned so much. Some big takeaways included how to use DOM hooks, calling a function at the end of another function to ensure a user is taken to the right place of my webpage, using various methods such as setAttribute and match, continuing to learn about using event listeners, using local storage (setting and getting data), and learning how to use a page refresh.

<a id="item-five"></a>

### USAGE

The deployed page through GitHub can be found at the following [link](https://alexahnbaum.github.io/Challenge_3_password_generator_adventure/)

<a id="item-six"></a>

### CREDITS

During the course of this challenge, I worked with a tutor from my boot camp. The tutor's name is Sandy Smith. Ms. Smith met with me on a zoom video conference call to support me with the problems I faced with regards to local storage and better use of calling and declaring functions.

I reviewed old classroom recordings from my boot camp.

I wathced a recorded video demo from my boot camp instructor, John Young. [Week 4 Activity 28](https://www.loom.com/share/29b038373f6243b6ad7a1883c6e0d0ee)

I read online articles at the following websites:

- [getbem - Introduction](https://getbem.com/introduction/)

- [Stack Overflow - How can I store a Javascript variable in local storage?](https://stackoverflow.com/questions/73342660/how-can-i-store-a-javascript-variable-in-local-storage)

- [MDN Web Docs - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<a id="item-seven"></a>

### LICENSE

MIT License

Copyright (c) 2023 alexahnbaum

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
