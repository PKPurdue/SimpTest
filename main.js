var questions = [
	"Been called a simp?",
	"Had a crush?",
	"Asked someone on a date?",
	"Paid the full bill on a date?",
	"Done a favor for someone because they were attractive",
	"Done an unnecessary act (i.e. holding the door, sharing homework, etc) for someone because they were attractive",
	"Gone out of your way to do an unnecessary act of kindness because you found them attractive",
	"Changed your schedule because of MPS",
	"Thought about MPS non-sexually when they weren't around",
	"Thought about MPS sexually when they weren't around",
	"Fantasized about different situations MPS",
	"Fantasized about someone who isn't real",
	"Had a waifu",
	"Thought about a scenario where you sacrifice yourself for them",
	"Someone came to mind when you read the word 'them'",
	"Dreamt about MPS",
	"Had a sexual dream about MPS",
	
	"Had a crush on someone you've seen but never talked to",
	"Had a crush on someone who doesn't know you exist",
	"Had a crush on someone you haven't seen in a week",
	"Had a crush on someone you haven't seen in a month",
	"Had a crush on someone you haven't seen in a year",
	"Masturbated to the thought of them",
	"Masturbated to a picture/video of them",
	"Masturbated to the thought of someone you know who doesn't know you",
	"Masturbated to the thought of someone who doesn't know you exist",
	"Masturbated to the thought of someone who isn't real",
	"Found a porn with someone who looks similar to MPS and gotten off to it",
	"Paid for OnlyFans",
	"Paid for any form of online sex work",
	"Bought a premium subscription on dating apps",
	
	"Given a foot massage unprompted",
	"Given a back massage unprompted",
	"Offered a sexual favor with no reciprocation",
	"Given a sexual favor with no reciprocation",
	
	"Watched a tv show just so you could talk about it with someone",
	"Changed your hair/makeup to please someone",
	"Changed your style to please someone",
	"Gotten dressed up just to send a snap/video chat",
	"Answered a booty call",
	"Gone out after midnight for a booty call",
	"Traveled 30+ minutes to see MPS",
	"Traveled 1+ hour to see MPS",
	"Traveled 3+ hours to see MPS",
	
	"Tried to continue the conversation after a one-word response",
	"Asked if they ate enough/drank enough water",
	"Asked someone to put in the bare minimum",
	"Gotten gaslighted",
	"Gotten gaslighted and still stayed with the person",
	"Gotten cheated on and still stayed with the person",
	"Offered to meet with someone only for them to blow you off, and still pursued them",
	"If you think of anyone when you read 'they were the one'",
	
	"Sent 4+ unanswered messages",
	"Checked their snap score to see if it increased",
	"Checked their last known location",
	"Checked if they posted on social media",
	"Stalked them on social media",
	"Stalked their family on social media",
	"Stalked their followers/following on social media",
	"Looked up their ex",
	"Wished you were their current S/O",
	"Cried or gotten depressed because you're not as pretty as their ex(es)",
	
	"Tried out their last name/their first name with your last",
	"Fantasized about marrying someone",
	"Said 'I love you'",
	"Loved someone who didn't love you back",
	"Rejected someone else in the hopes you can be with your crush",
	"Canceled plans for someone",
	"Canceled on your friends for someone",
	"Blown off your family for someone",
	"Do you use reddit?",
	"Do you use discord?",
	"Used the phrase 'my king/queen' unironically",
	"Upvoted or commented attractive people's posts in the hope they'll acknowledge you",
	"Been called a 'nice guy' or 'nice girl'?",
	
	"Had a dependent attachment to MPS",
	"Had a codependent attachment to MPS",
	"Gotten depressed because you weren't with them",
];

var ranks = [];
ranks["Simp God"] = 94;
ranks["Mega Simp"] = 82;
ranks["Homer SIMPson"] = 70;
ranks["Simp"] = 58;
ranks["Simp Tendencies"] = 42;
ranks["Kinda Simpy"] = 30;
ranks["Anti-Simp"] = 15;
ranks["Chad"] = 5;

var firstPageIds = ["questionDiv", "submit-button", "clear-button"];
var secondPageIds = [];

console.log("Loaded.");
var questionHolder = document.getElementById("question-holder");
var div = document.getElementById("test-div");
for (var i = 0; i < questions.length; i++) {
	var clon = div.cloneNode(true);
	clon.id = "Div" + (i + 1);
	clon.style = "";
	clon.children[0].innerHTML = (i + 1) + ". ";
	if (questions[i][questions[i].length - 1] != "?") { questions[i] += "?"; }
	clon.children[2].innerHTML = questions[i];
	clon.children[1].id = "checkbox" + i;
	questionHolder.appendChild(clon);
};

function clearCheckboxes() {
	var checkboxes = document.getElementsByClassName("checkbox");
	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = false;
	}
}

function tallyCheckboxes() {
	var total = 0;
	var checkboxes = document.getElementsByClassName("checkbox");
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked == true) {
			total++;
		}
	}
	return total;
}

function showTotal() {
	var total = tallyCheckboxes();
	var hideThings = document.getElementsByClassName("page1");
	for (var i = 0; i < hideThings.length; i++) { hideThings[i].style.display = "none"; }
	document.getElementById("score").innerHTML = total;
	var lowest = 101;
	for (var i in ranks) {
		if (total < ranks[i] && ranks[i] < lowest) {
			lowest = ranks[i];
			document.getElementById("rank").innerHTML = i;
		}
	}
	var showThings = document.getElementsByClassName("page2");
	for (var i = 0; i < showThings.length; i++) { showThings[i].style.display = "inline-block"; }
}

function goBack() {
	var hideThings = document.getElementsByClassName("page1");
	for (var i = 0; i < hideThings.length; i++) { hideThings[i].style.display = ""; }
	var showThings = document.getElementsByClassName("page2");
	for (var i = 0; i < showThings.length; i++) { showThings[i].style.display = "none"; }
}