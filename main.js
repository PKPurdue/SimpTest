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
	
	"Given a foot massage unprompted",
	"Given a back massage unprompted",
	"Offered a sexual favor with no reciprocation",
	"Given a sexual favor with no reciprocation",
	
	"Watched a tv show you didn't like just so you could talk about it with someone",
	"Played a video game they liked to get closer to them",
	"Gone to an event you wouldn't have gone to if they weren't there",
	"Pretended you liked/didn't like astrology",
	"Changed your hair/makeup to please someone",
	"Changed your style to please someone",
	"Gotten dressed up just to send a snap/video chat",
	"Answered a booty call",
	"Gone out after midnight for a booty call",
	"Traveled 30+ minutes to see MPS",
	"Traveled 1+ hour to see MPS",
	"Traveled 3+ hours to see MPS",
	"Been in an LDR",
	
	"Tried to continue the conversation after a one-word response",
	"Asked if they ate enough/drank enough water",
	"Asked someone to put in the bare minimum",
	"Gotten gaslighted",
	"Gotten gaslighted and still stayed with the person",
	"Gotten cheated on and still stayed with the person",
	"Offered to meet with someone only for them to blow you off, and still pursued them",
	"If you think of anyone when you read 'they were the one'",
	"Gone on a date with someone and been completely passive because you want them to like you",
	"Gotten angry because they were in a bad relationship and you could 'treat them better'",
	
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
	"Been cucked",
	"Found a porn with someone who looks similar to MPS and gotten off to it",
	"Paid for OnlyFans",
	"Paid for any form of online sex work",
	"Bought a premium subscription on dating apps",
	"Answered a thirst trap",
	
	"Slid into someone's DMs",
	"Sent 4+ unanswered messages",
	"Consistently responded within a few minutes to their messages if they take hours to respond",
	"Asked your friends/someone else how to respond to their texts because you want to impress them",
	"Checked their snap score to see if it increased",
	"Checked their last known location",
	"Checked if they posted on social media",
	"Stalked them on social media",
	"Stalked their family on social media",
	"Stalked their followers/following on social media",
	"Created an alternate social media account to stalk/interact with them",
	"Called them with a number blocker just to talk to them",
	"Texted them from a fake number asking who their crush is",
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
	"Would sacrifice your own happiness for theirs",
	
	"Spent $1 on someone in a simp manner",
	"Spent over $100 on someone in a simp manner",
	"Spent over $1,000 on someone in a simp manner",
	"Lied to yourself about simping over someone",
	"Have you simped before?",
	"Would you simp again?",
];

var ranks = [];
ranks["Purebred Simp"] = 100;
ranks["Simp God"] = 94;
ranks["Mega Simp"] = 82;
ranks["You're a simp, Harry"] = 76;
ranks["Homer SIMPson"] = 68;
ranks["Simp"] = 58;
ranks["Simp Tendencies"] = 44;
ranks["Kinda Simpy"] = 31;
ranks["Minor Simp"] = 22;
ranks["Anti-Simp"] = 14;
ranks["Chad"] = 7;
ranks["1% Simp, 99% Hot Gas"] = 1;

var rankExplanations = [];
rankExplanations["Purebred Simp"] = "You are the definition of a simp. Re-evaluate your life choices and seek help.";
rankExplanations["Simp God"] = "Seek help.";

rankExplanations["Chad"] = "No simping detected.";

var otherPeople = [];
otherPeople["Purebred Simp"] = ["Millhouse"];



var firstPageIds = ["questionDiv", "submit-button", "clear-button"];
var secondPageIds = [];

console.log("Loaded.");
var questionHolder = document.getElementById("question-holder");
var div = document.getElementById("test-div");
for (var i = 0; i < 68; i++) {
	var clon = div.cloneNode(true);
	clon.id = "Temp" + i;
	if (questions[i][questions[i].length - 1] != "?") { questions[i] += "?"; }
	clon.children[1].innerHTML = questions[i];
	clon.children[0].id = "checkbox" + i;
	questionHolder.appendChild(clon);
};
for (var i = 68; i < 69; i++) {
	var clon = div.cloneNode(true);
	clon.id = "Temp" + i;
	clon.children[1].innerHTML = "Just check the dang box";
	clon.children[1].id = "checkbox" + i;
	questionHolder.appendChild(clon);
}
for (var i = 68; i < questions.length; i++) {
	var clon = div.cloneNode(true);
	clon.id = "Temp" + (i + 1);
	if (questions[i][questions[i].length - 1] != "?") { questions[i] += "?"; }
	clon.children[1].innerHTML = questions[i];
	clon.children[0].id = "checkbox" + (i + 1);
	questionHolder.appendChild(clon);
};
div.remove();

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