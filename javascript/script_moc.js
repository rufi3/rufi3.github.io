function mocpuzzle_evidence5_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("mocpuzzle_button5").click();
        return false;
    }
    return true;
};

function hide_mocpuzzle_evidence5() {
  document.getElementById("evidence10").style.display = "none";
};

function mocpuzzle_evidence5() {
	var e5lowercase = document.getElementById("mocpuzzle5_text").value;
  var e5 = e5lowercase.toUpperCase();
  var answer5;
  var randomanswer5 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e5 == "WHEN IN LOVE AMY TOUCHES HER CHIN" || e5 == "WHENINLOVEAMYTOUCHESHERCHIN") {
  		answer5 = "Correct! Amy couldn't hide this little quirk from Jennifer.";
      hide_mocpuzzle_evidence5();
      document.getElementById("evidence10").style.display = "block";
	} else {
  		answer5 = randomanswer5[Math.floor(Math.random()*randomanswer5.length)];
      hide_mocpuzzle_evidence5();
  	}
  document.getElementById("mocpuzzle5_answer").innerHTML = answer5;
};

function mocpuzzle_evidence6_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("mocpuzzle_button6").click();
        return false;
    }
    return true;
};


function hide_mocpuzzle_evidence6() {
  document.getElementById("evidence11").style.display = "none";
};

function mocpuzzle_evidence6() {
	var e6lowercase = document.getElementById("mocpuzzle6_text").value;
  var e6 = e6lowercase.toUpperCase();
  var answer6;
  var randomanswer6 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e6 == "KYLIE") {
  		answer6 = "Correct! What did Jennifer mean by this? Is Kylie having financial problems?";
      hide_mocpuzzle_evidence6();
      document.getElementById("evidence11").style.display = "block";
	} else {
  		answer6 = randomanswer6[Math.floor(Math.random()*randomanswer6.length)];
      hide_mocpuzzle_evidence6();
  	}
  document.getElementById("mocpuzzle6_answer").innerHTML = answer6;
};

function mocpuzzle_evidence7_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("mocpuzzle_button7").click();
        return false;
    }
    return true;
};

function hide_mocpuzzle_evidence7() {
  document.getElementById("evidence12").style.display = "none";
};

function mocpuzzle_evidence7() {
	var e7lowercase = document.getElementById("mocpuzzle7_text").value;
  var e7 = e7lowercase.toUpperCase();
  var answer7;
  var randomanswer7 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e7 == "I KNOW ABOUT YOUR FAKE FOLLOWERS" || e7 == "IKNOWABOUTYOURFAKEFOLLOWERS") {
  		answer7 = "Correct! It seems that Marvin paid for some of his popularity.";
      hide_mocpuzzle_evidence7();
      document.getElementById("evidence12").style.display = "block";
	} else {
  		answer7 = randomanswer7[Math.floor(Math.random()*randomanswer7.length)];
      hide_mocpuzzle_evidence7();
  	}
  document.getElementById("mocpuzzle7_answer").innerHTML = answer7;
};

function mocpuzzle_evidence8_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("mocpuzzle_button8").click();
        return false;
    }
    return true;
};

function hide_mocpuzzle_evidence8() {
  document.getElementById("evidence13").style.display = "none";
};

function mocpuzzle_evidence8() {
	var e8lowercase = document.getElementById("mocpuzzle8_text").value;
  var e8 = e8lowercase.toUpperCase();
  var answer8;
  var randomanswer8 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e8 == "ITS OVER" || e8 == "IT S OVER" || e8 == "IT'S OVER" || e8 == "ITSOVER" || e8 == "IT'SOVER") {
  		answer8 = "Correct! What's over? And to whom is Jennifer sending this message?";
      hide_mocpuzzle_evidence8();
      document.getElementById("evidence13").style.display = "block";
	} else {
  		answer8 = randomanswer8[Math.floor(Math.random()*randomanswer8.length)];
      hide_mocpuzzle_evidence8();
  	}
  document.getElementById("mocpuzzle8_answer").innerHTML = answer8;
};

function mocpuzzle_evidence9_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("mocpuzzle_button9").click();
        return false;
    }
    return true;
};

function hide_mocpuzzle_evidence9() {
  document.getElementById("evidence14").style.display = "none";
};

function mocpuzzle_evidence9() {
	var e9lowercase = document.getElementById("mocpuzzle9_text").value;
  var e9 = e9lowercase.toUpperCase();
  var answer9;
  var randomanswer9 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e9 == "I WANT U" || e9 == "IWANTU" || e9 == "I WANT YOU" || e9 == "IWANTYOU") {
  		answer9 = "Correct! Jennifer was being pretty direct in her attempt to start an affair with Ryan.";
      hide_mocpuzzle_evidence9();
      document.getElementById("evidence14").style.display = "block";
	} else {
  		answer9 = randomanswer9[Math.floor(Math.random()*randomanswer9.length)];
      hide_mocpuzzle_evidence9();
  	}
  document.getElementById("mocpuzzle9_answer").innerHTML = answer9;
};
