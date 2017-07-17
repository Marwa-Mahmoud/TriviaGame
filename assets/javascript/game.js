
var data = [

	{question: "How to tell the age of a fish?",
	answers:["scales", "eyes", "tail", "length"],
	correctAnswer: "scales",//answers[0], 0
	gifImage: "assets/images/fish.gif"
	}
	,
	{question: "What is the length of the chameleon tongue?",
	answers: ["twice its body", "half its body", "one and half times of its body", "same as its body"],
	correctAnswer: "one and half times of its body", //2
	gifImage: "assets/images/chameleon.gif"
	}
	,
	{question: "What animal can sleep standing?",
	answers: ["rabbit", "cow", "dog", "cat"],
	correctAnswer: "cow", //1
	gifImage: "assets/images/cow.gif"
	}
/*	,
	{question: "What are the most poisonous snakes in the world?",
	answers: ["cobras", "vipers", "anaconda", "sea snakes"],
	correctAnswer: "sea snakes", //3
	gifImage: "assets/images/seasnakes.gif"
	}
	,
	{question: "How many times does Hummingbirds flap their wings per second?",
	answers: ["10 to 30", "30 to 50", "50 to 70", "70 to 90"],
	correctAnswer: "50 to 70", //2
	gifImage: "assets/images/hummingbird.gif"
	}
*/
];

var index = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerInterval;



$(document).ready(function(){

	$("#start-btn").click(function(){
		$(this).hide();
		setScreen();

	});

	 $("li").click(function(){
        var userChoice = $(this).text();
        console.log(userChoice)
        checkAnswer(userChoice);
        clearInterval(timerInterval);
       
    });


	var restartGame = function(){
		index = 0;
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		$("#final-result").empty();
		setScreen();

	}

	var setScreen = function(){
		$("#correct-image").hide();/////////
		$("#question").hide();///
		$("#result").html("");///
		$("#correct-answer").html("");///
		var timer = 20;
		reloadTimer(timer);
		displayQuestion();
	}


	var reloadTimer = function(tim){
			
		var startTimer = function(){
			tim--;
			$("#timer").text("Time Remaining: "+tim+" Seconds");
			if(tim===0){
				clearInterval(timerInterval);
				$("#result").html("Time up!");
				unanswered++;
				displayAnswer();
			}
		}
		startTimer();
		
		timerInterval = setInterval(startTimer, 1000);
	

	}

	
	var displayQuestion =  function(){
		var question = data[index].question;
		var answers = data[index].answers;
		$("#question-text").html(question);
		for(var i=0; i<answers.length; i++){
			$("#answers").children().eq(i).html("<a href='#' class='list-group-item'>"
													+answers[i]+"</a>");
		}
		$("#answers").show();
		$("#question").show();
		
	}

	var displayAnswer = function(){
		$("#answers").hide();
		$("#correct-answer").html("The correct answer is: "+data[index].correctAnswer);
		$("#correct-image").html("<img src="+data[index].gifImage+" width='300px'>");
		$("#correct-image").show();
		index++;
		if(index === data.length){
			index = 0;
			setTimeout(displayFinalResult, 3000);
		}
		else{	
			setTimeout(setScreen, 3000);
		}

	}

	var displayFinalResult = function(){
		$("#question").hide();
		$("#final-result").append("Game over! Here are your results"+"<br>");
		$("#final-result").append("Correct Answers: "+correct+"<br>");
		$("#final-result").append("Incorrect Answers: "+incorrect+"<br>");
		$("#final-result").append("Unanswered: "+unanswered+"<br>");
		$("#final-result").append("<h3 id='start-over'> Start Over </h3>");
		$("#start-over").hover(function(){$(this).css("color", "yellow");},
								 function(){$(this).css("color", "pink");});

		$("#start-over").on("click", function(){

			restartGame();
		} ); 
		

	}




   var checkAnswer = function(ans){
   	if (ans === data[index].correctAnswer){
   		$("#result").html("Yesss!");
   		correct++;

   		
   	}
   	else{
   		$("#result").html("Noooo!");
   		incorrect++
   	}
   	displayAnswer();


   }

});