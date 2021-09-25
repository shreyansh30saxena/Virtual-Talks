function speak() {

	let userText = document.getElementById("speak-text").value;

	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	utter.text = userText;
	utter.volume = 1;

	utter.onend = function () {
		alert('I hope I said it all');
	}
	window.speechSynthesis.speak(utter);
}

/*------------------------------------------ Speech to Text---------------------------------------*/


function runSpeechRecognition() {

	var output = document.getElementById("output");

	var action = document.getElementById("action");

	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();


	recognition.onstart = function () {
		document.getElementById("start-speaking-heading").style.display = "none";
		action.innerHTML = "<span style='color:white; margin-left : 14%; font-size : 30px;'>Listening, please speak...</span>";
	};

	recognition.onspeechend = function () {
		action.innerHTML = "<span style='color:white; margin-left : 10%; font-size : 20px;'>Stopped listening, hope you are done...</span>";
		recognition.stop();
	}


	recognition.onresult = function (event) {
		var transcript = event.results[0][0].transcript;
		var confidence = event.results[0][0].confidence;
		console.log(confidence * 100);
		output.innerHTML = "<span style='color:black; font-size : 25px;' font-family : 'Hahmlet'; word-wrap: break-word;>" + transcript + "</span>";
		output.classList.remove("hide");
	};

	recognition.start();
}

/*---------------------------INTERVIEW-------------------------------------*/

const answers = [];
var i = 0,
	j = 0;

function runSpeechRecognition_interview() {


	var action = document.getElementById("action");


	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();


	recognition.onstart = function () {

		let heading = document.getElementById("start-speaking-heading-2");
		heading.style.display = "none";
		let msg = document.getElementById("message");
		msg.style.display = "block";
		msg.style.fontSize = "10px";
		action.innerHTML = "<span style='color:white; margin-left : 14%; font-size : 30px;'>Listening, please speak...</span>";
	};

	recognition.onspeechend = function () {
		recognition.stop();
		i += 1;
		let blink = document.getElementById("write-button-3");
		let image = document.getElementById("speaking-image");
		let heading = document.getElementById("start-speaking-heading-2");
		let msg = document.getElementById("message");
		msg.style.display = "none";
		heading.style.display = "block";
		image.src = "speaking.gif";
		image.style.width = "30%";
		image.style.height = "200px";
		blink.style.backgroundColor = "rgb(216, 45, 102)";
		blink.style.color = "white";
		speak_interview();
	}

	recognition.onresult = function (event) {
		var transcript = event.results[0][0].transcript;
		answers[j] = transcript;
		console.log(answers[j]);
		j += 1;
	};
	recognition.start();
}

function speak_interview() {

	const qstns = ['Hi Candidate I am Dobi, please tell me about yourself', 'That is a nice introduction,What are your skill sets', 'It was nice talking to you, we will get back with the results'];

        let size = qstns.length;
	 
	 if(i == size ){

	  alert("Interview is over, return to homepage");
	  window.location.href="index.html";
	}
	let utter = new SpeechSynthesisUtterance();
	utter.lang = 'en-US';
	utter.text = qstns[i];
	utter.volume = 1;

	utter.onend = function () {

		let blink = document.getElementById("write-button-3");
		let image = document.getElementById("speaking-image");
		image.src = "notSpeaking.PNG";
		image.style.width = "30%";
		image.style.height = "200px";
		blink.style.backgroundColor = "white";
		blink.style.color = "red";
	}

	window.speechSynthesis.speak(utter);
}

function interview() {

	let button = document.getElementById("start");
	let text = document.getElementById("interview-heading");
	let image = document.getElementById("speaking-image");
	let speakButton = document.getElementById("write-button-3");
	let speakText = document.getElementById("start-speaking-heading-2");

	image.src = "speaking.gif";
	image.style.display = "block";
	image.style.width = "30%";
	image.style.height = "200px";
	speakButton.style.display = "block";
	speakText.style.display = "block";
	button.style.display = "none";
	text.style.display = "none";

	speak_interview();

}
