
var data = [

	{question: "How to tell the age of a fish?",
	answers:["scales", "eyes", "tail", "length"],
	correctAnswer: "scales"//answers[0], 0
	}
	,
	{question: "What is the length of the chameleon tongue?",
	answers: ["twice its body", "half its body", "one and half times of its body", "same as its body"],
	correctAnswer: 2
	}
	,
	{question: "What animal can sleep standing?",
	answers: ["rabbit", "cow", "dog", "cat"],
	correctAnswer: 1
	}
	,
	{question: "What are the most poisonous snakes in the world?",
	answers: ["cobras", "vipers", "anaconda", "sea snakes"],
	correctAnswer: 3
	}
	,
	{question: "How many times does Hummingbirds flap their wings per second?",
	answers: ["10 to 30", "30 to 50", "50 to 70", "70 to 90"],
	correctAnswer: 2
	}

];

var index = 0;
var wins = 0;
var losses = 0;
var timerInterval;



$(document).ready(function(){

	$("#start-btn").click(function(){
		$(this).hide();
		setScreen()

	});



	var setScreen = function(){
		var timer = 20;
		reloadTimer(timer);
		displayQuestion();
	}


	var reloadTimer = function(tim){
			
		var startTimer = function(){
			
			$("#timer").text(tim);
			tim--;
			if(tim===0){
				clearInterval(timerInterval);
				displayAnswer();
			}
		}
		
		timerInterval = setInterval(startTimer, 1000);
	

	}

	
	var displayQuestion =  function(){
		var question = data[index].question;
		var answers = data[index].answers;
		$("#question").html(question);
		for(var i=0; i<answers.length; i++){
			$("#answers").children().eq(i).append(answers[i]);
		}
		
	}

	var displayAnswer = function(){

	}


   $("a").click(function(){
        var userChoice = $(this).text();
        console.log(userChoice)
        checkAnswer(userChoice);
        $("#answers").hide();
    });

   var checkAnswer = function(ans){
   	if (ans === data[index].correctAnswer){
   		$("#correct-answer").html("Yesss!");
   		
   	}
   	else{
   		$("#correct-answer").html("Noooo!");
   	}

   }

});