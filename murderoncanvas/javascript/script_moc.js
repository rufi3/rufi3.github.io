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

function show_mochint_5_1() {
  document.getElementById("mochint_answer5_1").style.display = "block";
};

function show_mochint_5_2() {
  document.getElementById("mochint_answer5_2").style.display = "block";
};

function show_mochint_5_3() {
  document.getElementById("mochint_answer5_3").style.display = "block";
};

function show_mochint_5_4() {
  document.getElementById("mochint_answer5_4").style.display = "block";
};

function show_mochint_5_5() {
  document.getElementById("mochint_answer5_5").style.display = "block";
};

function show_mochint_6_1() {
  document.getElementById("mochint_answer6_1").style.display = "block";
};

function show_mochint_6_2() {
  document.getElementById("mochint_answer6_2").style.display = "block";
};

function show_mochint_6_3() {
  document.getElementById("mochint_answer6_3").style.display = "block";
};

function show_mochint_6_4() {
  document.getElementById("mochint_answer6_4").style.display = "block";
};

function show_mochint_6_5() {
  document.getElementById("mochint_answer6_5").style.display = "block";
};

function show_mochint_6_6() {
  document.getElementById("mochint_answer6_6").style.display = "block";
};

function show_mochint_6_7() {
  document.getElementById("mochint_answer6_7").style.display = "block";
};

function show_mochint_6_8() {
  document.getElementById("mochint_answer6_8").style.display = "block";
};

function show_mochint_7_1() {
  document.getElementById("mochint_answer7_1").style.display = "block";
};

function show_mochint_7_2() {
  document.getElementById("mochint_answer7_2").style.display = "block";
};

function show_mochint_7_3() {
  document.getElementById("mochint_answer7_3").style.display = "block";
};

function show_mochint_7_4() {
  document.getElementById("mochint_answer7_4").style.display = "block";
};

function show_mochint_7_5() {
  document.getElementById("mochint_answer7_5").style.display = "block";
};

function show_mochint_7_6() {
  document.getElementById("mochint_answer7_6").style.display = "block";
};

function show_mochint_7_7() {
  document.getElementById("mochint_answer7_7").style.display = "block";
};

function show_mochint_7_8() {
  document.getElementById("mochint_answer7_8").style.display = "block";
};

function show_mochint_8_1() {
  document.getElementById("mochint_answer8_1").style.display = "block";
};

function show_mochint_8_2() {
  document.getElementById("mochint_answer8_2").style.display = "block";
};

function show_mochint_8_3() {
  document.getElementById("mochint_answer8_3").style.display = "block";
};

function show_mochint_8_4() {
  document.getElementById("mochint_answer8_4").style.display = "block";
};

function show_mochint_8_5() {
  document.getElementById("mochint_answer8_5").style.display = "block";
};

function show_mochint_8_6() {
  document.getElementById("mochint_answer8_6").style.display = "block";
};

function show_mochint_8_7() {
  document.getElementById("mochint_answer8_7").style.display = "block";
};

function show_mochint_9_1() {
  document.getElementById("mochint_answer9_1").style.display = "block";
};

function show_mochint_9_2() {
  document.getElementById("mochint_answer9_2").style.display = "block";
};

function show_mochint_9_3() {
  document.getElementById("mochint_answer9_3").style.display = "block";
};

function show_mochint_9_4() {
  document.getElementById("mochint_answer9_4").style.display = "block";
};

function show_mochint_9_5() {
  document.getElementById("mochint_answer9_5").style.display = "block";
};

function show_mochint_9_6() {
  document.getElementById("mochint_answer9_6").style.display = "block";
};

function mocfinale_validate() {
	var q1lowercase = document.getElementById("mocfinale1").value;
  var q1 = q1lowercase.toUpperCase();
	var q2 = document.getElementById("mocfinale2_option4");
	var q3lowercase = document.getElementById("mocfinale3").value;
  var q3 = q3lowercase.toUpperCase();
  var finaleanswer1;
  var finaleanswer2;
  var finaleanswer3;
  var finaleanswer4;
  if ((q1 == "AMY" || q1 == "AMY GRAHAM" || q1 == "AMYGRAHAM") && q2.checked == true && (q3 == "MILK" || q3 == "COW MILK" || q3 == "COWMILK" || q3 == "COW'S MILK" || q3 == "COW'SMILK")) {
  		finaleanswer1 = "Bravo! You've found the culprit. Amy Graham was the mastermind and executor of the brilliant and malicious plan to murder Jennifer Perks.";
  		finaleanswer2 = "Excellent! It was indeed jealousy that drove the murderer to take the life of Jennifer Perks. The culprit was madly in love with Simon Knight, Jennifer's husband.";
  		finaleanswer3 = "Outstanding! The murderer poured cow's milk into the almond milk carton, knowing that Jennifer is highly allergic to it.";
  		finaleanswer4 = "You have once again proved your amazing detective skills and shown that the name Vanja Petelin belongs next to Sherlock Holmes and Hercule Poirot. Well done! Even though Jennifer Perks wasn't the nicest person, she didn't deserve the destiny that Amy Graham drew for her. Thanks to your sharp mind, the culprit will be put behind bars.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 == "AMY" || q1 == "AMY GRAHAM" || q1 == "AMYGRAHAM") && q2.checked == false && (q3 == "MILK" || q3 == "COW MILK" || q3 == "COWMILK" || q3 == "COW'S MILK" || q3 == "COW'SMILK")) {
  		finaleanswer1 = "Bravo! You've found the culprit. Amy Graham was the mastermind and executor of the brilliant and malicious plan to murder Jennifer Perks.";
  		finaleanswer2 = "Actually, it was jealousy that drove the murderer to take the life of Jennifer Perks. The culprit was madly in love with Simon Knight, Jennifer's husband.";
  		finaleanswer3 = "Outstanding! The murderer poured cow's milk into the almond milk carton, knowing that Jennifer is highly allergic to it.";
  		finaleanswer4 = "You have successfully found the murderer, as well as the murder weapon. The only thing you have missed is the motive for the murder. However, thanks to you, the culprit will be put behind bars! Even though Jennifer Perks wasn't the nicest person, she certainly didn't deserve the destiny that Amy Graham drew for her.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 == "AMY" || q1 == "AMY GRAHAM" || q1 == "AMYGRAHAM") && q2.checked == true && (q3 != "MILK" && q3 != "COW MILK" && q3 != "COWMILK" && q3 != "COW'S MILK" && q3 != "COW'SMILK")) {
  		finaleanswer1 = "Bravo! You've found the culprit. Amy Graham was the mastermind and executor of the brilliant and malicious plan to murder Jennifer Perks.";
  		finaleanswer2 = "Excellent! It was indeed jealousy that drove the murderer to take the life of Jennifer Perks. The culprit was madly in love with Simon Knight, Jennifer's husband.";
  		finaleanswer3 = "Jennifer was highly allergic to cow's milk. The murderer was aware of this and they poured cow's milk into the almond milk carton.";
  		finaleanswer4 = "You have successfully found the murderer, as well as the motive for the murder. The only thing you have missed is the murder weapon. However, thanks to you, the culprit will be put behind bars! Even though Jennifer Perks wasn't the nicest person, she certainly didn't deserve the destiny that Amy Graham drew for her.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 == "AMY" || q1 == "AMY GRAHAM" || q1 == "AMYGRAHAM") && q2.checked == false && (q3 != "MILK" && q3 != "COW MILK" && q3 != "COWMILK" && q3 != "COW'S MILK" && q3 != "COW'SMILK")) {
  		finaleanswer1 = "Bravo! You've found the culprit. Amy Graham was the mastermind and executor of the brilliant and malicious plan to murder Jennifer Perks.";
  		finaleanswer2 = "Actually, it was jealousy that drove the murderer to take the life of Jennifer Perks. The culprit was madly in love with Simon Knight, Jennifer's husband.";
  		finaleanswer3 = "Jennifer was highly allergic to cow's milk. The murderer was aware of this and they poured cow's milk into the almond milk carton.";
  		finaleanswer4 = "You have successfully found the murderer, and thanks to you, Amy will be put behind bars! You've missed the motive for the murder and the murder weapon. Still, you have proved that one shouldn't invite you over for a weekend if one is planning a murder.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 != "AMY" && q1 != "AMY GRAHAM" && q1 != "AMYGRAHAM") && q2.checked == true && (q3 == "MILK" || q3 == "COW MILK" || q3 == "COWMILK" || q3 == "COW'S MILK" || q3 == "COW'SMILK")) {
  		finaleanswer1 = "Unfortunately, you didn't blame the right person. The culprit is Amy Graham, who planned the murder to the smallest detail as well as invited everybody to the studio for the weekend.";
  		finaleanswer2 = "Excellent! It was indeed jealousy that drove the murderer to take the life of Jennifer Perks. The culprit was madly in love with Simon Knight, Jennifer's husband.";
  		finaleanswer3 = "Outstanding! The murderer poured cow's milk into the almond milk carton, knowing that Jennifer is highly allergic to it.";
  		finaleanswer4 = "You haven't found the murderer, but you've identified the motive for the murder as well as the murder weapon. Everybody had something against Jennifer, but it was Amy who took it a step further.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 != "AMY" && q1 != "AMY GRAHAM" && q1 != "AMYGRAHAM") && q2.checked == false && (q3 == "MILK" || q3 == "COW MILK" || q3 == "COWMILK" || q3 == "COW'S MILK" || q3 == "COW'SMILK")) {
  		finaleanswer1 = "Unfortunately, you didn't blame the right person. The culprit is Amy Graham, who planned the murder to the smallest detail as well as invited everybody to the studio for the weekend.";
  		finaleanswer2 = "Actually, it was jealousy that drove the murderer to take the life of Jennifer Perks. The culprit was madly in love with Simon Knight, Jennifer's husband.";
  		finaleanswer3 = "Outstanding! The murderer poured cow's milk into the almond milk carton, knowing that Jennifer is highly allergic to it.";
  		finaleanswer4 = "You haven't found the murderer or the motive for the murder, but you've identified the murder weapon. Everybody had something against Jennifer, but it was Amy who took it a step further.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 != "AMY" && q1 != "AMY GRAHAM" && q1 != "AMYGRAHAM") && q2.checked == true && (q3 != "MILK" && q3 != "COW MILK" && q3 != "COWMILK" && q3 != "COW'S MILK" && q3 != "COW'SMILK")) {
  		finaleanswer1 = "Unfortunately, you didn't blame the right person. The culprit is Amy Graham, who planned the murder to the smallest detail as well as invited everybody to the studio for the weekend.";
  		finaleanswer2 = "Excellent! It was indeed jealousy that drove the murderer to take the life of Jennifer Perks. The culprit was madly in love with Simon Knight, Jennifer's husband.";
  		finaleanswer3 = "Jennifer was highly allergic to cow's milk. The murderer was aware of this and they poured cow's milk into the almond milk carton.";
  		finaleanswer4 = "You haven't found the murderer or the murder weapon, but you've identified the motive for the murder. Everybody had something against Jennifer, but it was Amy who took it a step further.";
      document.getElementById("summary").style.display = "block";
	} else {
  		finaleanswer1 = "Unfortunately, you didn't blame the right person. The culprit is Amy Graham, who planned the murder to the smallest detail as well as invited everybody to the studio for the weekend.";
  		finaleanswer2 = "Actually, it was jealousy that drove the murderer to take the life of Jennifer Perks. The culprit was madly in love with Simon Knight, Jennifer's husband.";
  		finaleanswer3 = "Jennifer was highly allergic to cow's milk. The murderer was aware of this and they poured cow's milk into the almond milk carton.";
  		finaleanswer4 = "Everybody had something against Jennifer, but it was Amy who took it a step further. The culprit slipped through your fingers this time. However, criminals of the world, better watch out! This isn't the last we've seen of detective Vanja Petelin.";
      document.getElementById("summary").style.display = "block";
  	}
  document.getElementById("finale_answer1").innerHTML = finaleanswer1;
  document.getElementById("finale_answer2").innerHTML = finaleanswer2;
  document.getElementById("finale_answer3").innerHTML = finaleanswer3;
  document.getElementById("finale_answer4").innerHTML = finaleanswer4;
};
