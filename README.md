# TriviaGame


### Pseudocode
- Make an array of objects with all the questions and call it data.
- Each object in the array has 3 parts: The question, the suggested answers and the correct answer (or may be something that indicated that this answer is the correct one).
- when the game starts:	
  - The timer/question starts counting down
  - The first question is displayed in an html list by loading the first object of the data array
- There are now 3 senarios:
  - First: the user chooses the correct answer before the timer hits zero
  - Second: the user chooses the wrong answer
  - Third: time is up before the user makes a choice.
- How the game responds in each senario:
  - If first:
    - announce that the user won
    - update wins
    - display a gif and/or about the correct answer 	
  - If second:
    - announce that the user lost
    - update losses
    - display the correct answer

  - If third:
    - announce that time is up
    - display the correct answer

- After few seconds the game automaticaly displays the next question and repeat the same for every question

- At the end of the game:
  - Display the number of correct and incorrect answers
  - Display an option to restart the game without reloading	

 	