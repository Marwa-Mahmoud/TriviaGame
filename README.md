# TriviaGame

- Make an array of objects with all the questions.

- Each object in the array has 3 parts: The question, the suggested answers and the correct answer (or may be something that indicated that this answer is the correct one).

- when the game starts:	. the timer/question starts counting down
						. the first question is displayed in an html list by loading the first item of the data array
						

- we have now  senarios:

	first: the user chooses the correct answer before the timer hits zero
	second: the user chooses the wrong answer
	third: time is up before the user makes a choice.

- how the game responds in each senario:
	if first:	. announce that the user won
				. update wins
				. display a gif and/or about the correct answer 	

	if second:	. announce that the user lost
				. update losses
				. display the correct answer

	if third:	. announce that time is up
				. display the correct answer

- after few seconds the game automaticaly displays the next question and repeat the same for every question

- At the end of the game: . display the number of correct and incorrect answers
						  . display an option to restart the game without reloading	

 	