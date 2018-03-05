var triviaQuestions = [{
	question: "What is the plant Walt used to poison Brock?",
	answerList: ["Narcissus", "Lily-of-the-Valley", "Black Nightshade"],
	answer: 1
}, {
	question: "What is Walt’s middle name?",
	answerList: ["Archibald", "Matthew", "Hartwell"],
	answer: 2
}, {
	question: "What is the name of the boy Todd shot in the desert?",
	answerList: ["Drew Sharp", "David Stewart", "Donnie Solis"],
	answer: 0
}, {
	question: "What is the model of Walt’s original car?",
	answerList: ["1987 Toyota Tercel", "2004 Pontiac Aztek", "2006 PT Cruiser"],
	answer: 1
}, {
	question: "Before becoming Walt’s partner, <br> Jesse cooked his meth with what special ingredient?",
	answerList: ["Chili powder", "A1 Steak Sauce", "Oregano"],
	answer: 0
}, {
	question: "What movie does Saul refer to <br> when suggesting that Walt kill Jesse?",
	answerList: ["The Godfather", "Old Yeller", "Mean Streets"],
	answer: 1
}, {
	question: "How much money did Walt have buried in the desert?",
	answerList: ["$80 million", "$90 million", "$120 million"],
	answer: 0
}, {
	question: " What book is Hank reading on the toilet when he gets <br> his first clue that his brother-in-law is Heisenberg?",
	answerList: ["Catcher in the Rye", "Leaves of Grass", "Heart of Darkness"],
	answer: 1
}, {
	question: "The title of the pivotal episode <str>'Ozymandias'</str> refers to what?",
	answerList: ["A special brand of blue-colored crystal meth", "The chemical Walt uses to dispose of corpses", "A poem by Percy Shelley"],
	answer: 2
}, {
	question: "'Breaking Bad' was set in Albuquerque, N.M. because of film-crew tax breaks. Where did creator Vince Gilligan originally intend to set it?",
	answerList: ["Riverside, California", "Tacoma, Washington", "Missoula, Montana"],
	answer: 0
}];


var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "That's right!",
	incorrect: "No, that's not it.",
	endTime: "Out of time!",
	finished: "Here's how you did:"
}

$('#startBtn').on('click', function () {
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function () {
	$(this).hide();
	newGame();
});

function newGame() {
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion() {
	$('#message').empty();
	$('#correctedAnswer').empty();

	answered = true;

	//sets up new questions & answerList
	$('#currentQuestion').html('Question ' + (currentQuestion + 1) + '/' + triviaQuestions.length);
	$('.question').html('<h3>' + triviaQuestions[currentQuestion].question + '</h3>');
	for (var i = 0; i < 3; i++) {
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({ 'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();

	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click', function () {
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown() {
	seconds = 10;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;

	//sets timer to go down
	time = setInterval(showCountdown, 2000);
}

function showCountdown() {
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if (seconds < 1) {
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage() {
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;


	//checks to see correct, incorrect, or unanswered
	if ((userSelect == rightAnswerIndex) && (answered == true)) {
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if ((userSelect != rightAnswerIndex) && (answered == true)) {
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else {
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}

	if (currentQuestion == (triviaQuestions.length - 1)) {
		setTimeout(scoreboard, 3000)
	} else {
		currentQuestion++;
		setTimeout(newQuestion, 3000);
	}
}

function scoreboard() {
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}
