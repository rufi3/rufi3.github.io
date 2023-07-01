function requiempuzzle_evidence5_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("requiempuzzle_button5").click();
        return false;
    }
    return true;
};

function hide_requiempuzzle_evidence5() {
  document.getElementById("evidence13").style.display = "none";
};

function requiempuzzle_evidence5() {
	var e5lowercase = document.getElementById("requiempuzzle5_text").value;
  var e5 = e5lowercase.toUpperCase();
  var answer5;
  var randomanswer5 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e5 == "PENGUIN") {
  		answer5 = "Correct! What could the penguin in the drawing mean?";
      hide_requiempuzzle_evidence5();
      document.getElementById("evidence13").style.display = "block";
	} else {
  		answer5 = randomanswer5[Math.floor(Math.random()*randomanswer5.length)];
      hide_requiempuzzle_evidence5();
  	}
  document.getElementById("requiempuzzle5_answer").innerHTML = answer5;
};

function requiempuzzle_evidence6_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("requiempuzzle_button6").click();
        return false;
    }
    return true;
};

function hide_requiempuzzle_evidence6() {
  document.getElementById("evidence14").style.display = "none";
};

function requiempuzzle_evidence6() {
	var e6lowercase = document.getElementById("requiempuzzle6_text").value;
  var e6 = e6lowercase.toUpperCase();
  var answer6;
  var randomanswer6 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e6 == "JULY 8TH" || e6 == "JULY8TH") {
  		answer6 = "Correct! Hmmm, could it be a coincidence that today is July 8th?";
      hide_requiempuzzle_evidence6();
      document.getElementById("evidence14").style.display = "block";
	} else {
  		answer6 = randomanswer6[Math.floor(Math.random()*randomanswer6.length)];
      hide_requiempuzzle_evidence6();
  	}
  document.getElementById("requiempuzzle6_answer").innerHTML = answer6;
};

function requiempuzzle_evidence9_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("requiempuzzle_button9").click();
        return false;
    }
    return true;
};

function hide_requiempuzzle_evidence9() {
  document.getElementById("evidence15").style.display = "none";
};

function requiempuzzle_evidence9() {
	var e9lowercase = document.getElementById("requiempuzzle9_text").value;
  var e9 = e9lowercase.toUpperCase();
  var answer9;
  var randomanswer9 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e9 == "I WANT TO BE LIKE LAVA" || e9 == "IWANTTOBELIKELAVA") {
  		answer9 = "Correct! Daisy seems to be idolising Lava.";
      hide_requiempuzzle_evidence9();
      document.getElementById("evidence15").style.display = "block";
	} else {
  		answer9 = randomanswer9[Math.floor(Math.random()*randomanswer9.length)];
      hide_requiempuzzle_evidence9();
  	}
  document.getElementById("requiempuzzle9_answer").innerHTML = answer9;
};

function requiempuzzle_evidence10_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("requiempuzzle_button10").click();
        return false;
    }
    return true;
};

function hide_requiempuzzle_evidence10() {
  document.getElementById("evidence16").style.display = "none";
};

function requiempuzzle_evidence10() {
	var e10lowercase = document.getElementById("requiempuzzle10_text").value;
  var e10 = e10lowercase.toUpperCase();
  var answer10;
  var randomanswer10 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e10 == "LISA GUIN" || e10 == "LISAGUIN") {
  		answer10 = "Correct! Why would David Norman have the guitar that belongs to a certain Lisa Guin?";
      hide_requiempuzzle_evidence10();
      document.getElementById("evidence16").style.display = "block";
	} else {
  		answer10 = randomanswer10[Math.floor(Math.random()*randomanswer10.length)];
      hide_requiempuzzle_evidence10();
  	}
  document.getElementById("requiempuzzle10_answer").innerHTML = answer10;
};

function requiempuzzle_evidence11_press(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById("requiempuzzle_button11").click();
        return false;
    }
    return true;
};

function hide_requiempuzzle_evidence11() {
  document.getElementById("evidence17").style.display = "none";
};

function requiempuzzle_evidence11() {
	var e11lowercase = document.getElementById("requiempuzzle11_text").value;
  var e11 = e11lowercase.toUpperCase();
  var answer11;
  var randomanswer11 = [
  "That's not the correct solution. Try again.",
  "Sorry, but your answer is wrong.",
  "You should try something else.",
  "Hmmm...no, that's not it."
  ];
  if (e11 == "2 MAY 2008" || e11 == "2MAY2008" || e11 == "2 5 2008" || e11 == "252008" || e11 == "2ND MAY 2008" || e11 == "2NDMAY2008" || e11 == "2ND OF MAY 2008" || e11 == "2NDOFMAY2008" || e11 == "SECOND OF MAY 2008" || e11 == "SECOND OF MAY TWO THOUSAND OH EIGHT" || e11 == "SECONDOFMAYTWOTHOUSANDOHEIGHT") {
  		answer11 = "Correct! What makes this date so special to Lava?";
      hide_requiempuzzle_evidence11();
      document.getElementById("evidence17").style.display = "block";
	} else {
  		answer11 = randomanswer11[Math.floor(Math.random()*randomanswer11.length)];
      hide_requiempuzzle_evidence11();
  	}
  document.getElementById("requiempuzzle11_answer").innerHTML = answer11;
};

function show_requiemhint_5_1() {
  if (document.getElementById("requiemhint_answer5_1").style.display == "block") {
    document.getElementById("requiemhint_answer5_1").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer5_1").style.display = "block";
  }
};

function show_requiemhint_5_2() {
  if (document.getElementById("requiemhint_answer5_2").style.display == "block") {
    document.getElementById("requiemhint_answer5_2").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer5_2").style.display = "block";
  }
};

function show_requiemhint_5_3() {
  if (document.getElementById("requiemhint_answer5_3").style.display == "block") {
    document.getElementById("requiemhint_answer5_3").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer5_3").style.display = "block";
  }
};

function show_requiemhint_5_4() {
  if (document.getElementById("requiemhint_answer5_4").style.display == "block") {
    document.getElementById("requiemhint_answer5_4").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer5_4").style.display = "block";
  }
};

function show_requiemhint_5_5() {
  if (document.getElementById("requiemhint_answer5_5").style.display == "block") {
    document.getElementById("requiemhint_answer5_5").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer5_5").style.display = "block";
  }
};

function show_requiemhint_5_6() {
  if (document.getElementById("requiemhint_answer5_6").style.display == "block") {
    document.getElementById("requiemhint_answer5_6").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer5_6").style.display = "block";
  }
};

function show_requiemhint_5_7() {
  if (document.getElementById("requiemhint_answer5_7").style.display == "block") {
    document.getElementById("requiemhint_answer5_7").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer5_7").style.display = "block";
  }
};

function show_requiemhint_5_8() {
  if (document.getElementById("requiemhint_answer5_8").style.display == "block") {
    document.getElementById("requiemhint_answer5_8").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer5_8").style.display = "block";
  }
};

function show_requiemhint_6_1() {
  if (document.getElementById("requiemhint_answer6_1").style.display == "block") {
    document.getElementById("requiemhint_answer6_1").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_1").style.display = "block";
  }
};

function show_requiemhint_6_2() {
  if (document.getElementById("requiemhint_answer6_2").style.display == "block") {
    document.getElementById("requiemhint_answer6_2").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_2").style.display = "block";
  }
};

function show_requiemhint_6_3() {
  if (document.getElementById("requiemhint_answer6_3").style.display == "block") {
    document.getElementById("requiemhint_answer6_3").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_3").style.display = "block";
  }
};

function show_requiemhint_6_4() {
  if (document.getElementById("requiemhint_answer6_4").style.display == "block") {
    document.getElementById("requiemhint_answer6_4").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_4").style.display = "block";
  }
};

function show_requiemhint_6_5() {
  if (document.getElementById("requiemhint_answer6_5").style.display == "block") {
    document.getElementById("requiemhint_answer6_5").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_5").style.display = "block";
  }
};

function show_requiemhint_6_6() {
  if (document.getElementById("requiemhint_answer6_6").style.display == "block") {
    document.getElementById("requiemhint_answer6_6").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_6").style.display = "block";
  }
};

function show_requiemhint_6_7() {
  if (document.getElementById("requiemhint_answer6_7").style.display == "block") {
    document.getElementById("requiemhint_answer6_7").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_7").style.display = "block";
  }
};

function show_requiemhint_6_8() {
  if (document.getElementById("requiemhint_answer6_8").style.display == "block") {
    document.getElementById("requiemhint_answer6_8").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_8").style.display = "block";
  }
};

function show_requiemhint_6_9() {
  if (document.getElementById("requiemhint_answer6_9").style.display == "block") {
    document.getElementById("requiemhint_answer6_9").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_9").style.display = "block";
  }
};

function show_requiemhint_6_10() {
  if (document.getElementById("requiemhint_answer6_10").style.display == "block") {
    document.getElementById("requiemhint_answer6_10").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer6_10").style.display = "block";
  }
};

function show_requiemhint_9_1() {
  if (document.getElementById("requiemhint_answer9_1").style.display == "block") {
    document.getElementById("requiemhint_answer9_1").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer9_1").style.display = "block";
  }
};

function show_requiemhint_9_2() {
  if (document.getElementById("requiemhint_answer9_2").style.display == "block") {
    document.getElementById("requiemhint_answer9_2").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer9_2").style.display = "block";
  }
};

function show_requiemhint_9_3() {
  if (document.getElementById("requiemhint_answer9_3").style.display == "block") {
    document.getElementById("requiemhint_answer9_3").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer9_3").style.display = "block";
  }
};

function show_requiemhint_9_4() {
  if (document.getElementById("requiemhint_answer9_4").style.display == "block") {
    document.getElementById("requiemhint_answer9_4").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer9_4").style.display = "block";
  }
};

function show_requiemhint_9_5() {
  if (document.getElementById("requiemhint_answer9_5").style.display == "block") {
    document.getElementById("requiemhint_answer9_5").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer9_5").style.display = "block";
  }
};

function show_requiemhint_9_6() {
  if (document.getElementById("requiemhint_answer9_6").style.display == "block") {
    document.getElementById("requiemhint_answer9_6").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer9_6").style.display = "block";
  }
};

function show_requiemhint_9_7() {
  if (document.getElementById("requiemhint_answer9_7").style.display == "block") {
    document.getElementById("requiemhint_answer9_7").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer9_7").style.display = "block";
  }
};

function show_requiemhint_10_1() {
  if (document.getElementById("requiemhint_answer10_1").style.display == "block") {
    document.getElementById("requiemhint_answer10_1").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer10_1").style.display = "block";
  }
};

function show_requiemhint_10_2() {
  if (document.getElementById("requiemhint_answer10_2").style.display == "block") {
    document.getElementById("requiemhint_answer10_2").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer10_2").style.display = "block";
  }
};

function show_requiemhint_10_3() {
  if (document.getElementById("requiemhint_answer10_3").style.display == "block") {
    document.getElementById("requiemhint_answer10_3").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer10_3").style.display = "block";
  }
};

function show_requiemhint_10_4() {
  if (document.getElementById("requiemhint_answer10_4").style.display == "block") {
    document.getElementById("requiemhint_answer10_4").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer10_4").style.display = "block";
  }
};

function show_requiemhint_10_5() {
  if (document.getElementById("requiemhint_answer10_5").style.display == "block") {
    document.getElementById("requiemhint_answer10_5").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer10_5").style.display = "block";
  }
};

function show_requiemhint_11_1() {
  if (document.getElementById("requiemhint_answer11_1").style.display == "block") {
    document.getElementById("requiemhint_answer11_1").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer11_1").style.display = "block";
  }
};

function show_requiemhint_11_2() {
  if (document.getElementById("requiemhint_answer11_2").style.display == "block") {
    document.getElementById("requiemhint_answer11_2").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer11_2").style.display = "block";
  }
};

function show_requiemhint_11_3() {
  if (document.getElementById("requiemhint_answer11_3").style.display == "block") {
    document.getElementById("requiemhint_answer11_3").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer11_3").style.display = "block";
  }
};

function show_requiemhint_11_4() {
  if (document.getElementById("requiemhint_answer11_4").style.display == "block") {
    document.getElementById("requiemhint_answer11_4").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer11_4").style.display = "block";
  }
};

function show_requiemhint_11_5() {
  if (document.getElementById("requiemhint_answer11_5").style.display == "block") {
    document.getElementById("requiemhint_answer11_5").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer11_5").style.display = "block";
  }
};

function show_requiemhint_11_6() {
  if (document.getElementById("requiemhint_answer11_6").style.display == "block") {
    document.getElementById("requiemhint_answer11_6").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer11_6").style.display = "block";
  }
};

function show_requiemhint_11_7() {
  if (document.getElementById("requiemhint_answer11_7").style.display == "block") {
    document.getElementById("requiemhint_answer11_7").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer11_7").style.display = "block";
  }
};

function show_requiemhint_11_8() {
  if (document.getElementById("requiemhint_answer11_8").style.display == "block") {
    document.getElementById("requiemhint_answer11_8").style.display = "none";
  } else {
    document.getElementById("requiemhint_answer11_8").style.display = "block";
  }
};

function requiemfinale_validate() {
	var q1lowercase = document.getElementById("requiemfinale1").value;
  var q1 = q1lowercase.toUpperCase();
	var q2 = document.getElementById("requiemfinale2_option2");
  var q3 = document.getElementById("requiemfinale3_option3");
  var finaleanswer1;
  var finaleanswer2;
  var finaleanswer3;
  var finaleanswer4;
  if ((q1 == "LAVA" || q1 == "LAVA PEN" || q1 == "LAVAPEN") && q2.checked == true && q3.checked == true) {
  		finaleanswer1 = "Well done! You've found the murderer. Lava killed her cousin and tried to make it seem as if she was the intended target.";
  		finaleanswer2 = "That's right! Lava knew that Martha was planning not only to leave the tour and bring Daisy with her, but to stop every contact between them due to Lava's bad influence on Daisy. With Martha gone, Lava would become the legal guardian of Daisy and finally have her daughter back.";
  		finaleanswer3 = "Brilliant! The murder had to happen after 17:55 because that's when Martha arrived at the music hall. Lava swapped their clothes after killing her, but made a mistake and put the bracelet on Martha's left hand, while she was wearing it on her right hand.";
  		finaleanswer4 = "Your outstanding detective skills have once again saved the day. Lava was blinded by love for her lost child and made a mistake she will never be able to fix. It was your wit that managed to keep the innocent free and put the true culprit behind bars.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 == "LAVA" || q1 == "LAVA PEN" || q1 == "LAVAPEN") && q2.checked == false && q3.checked == true) {
  		finaleanswer1 = "Well done! You've found the murderer. Lava killed her cousin and tried to make it seem as if she was the intended target.";
  		finaleanswer2 = "Actually, it was the fear that Martha would take Daisy away from her that drove Lava to execute her horrid plan. Lava gave birth to Daisy when she was only a young girl herself, and Martha adopted her daughter. Now, when Lava finally reconnected with her, Martha threatened to divide them again, triggered by the bad influence that Lava had on Daisy.";
  		finaleanswer3 = "Brilliant! The murder had to happen after 17:55 because that's when Martha arrived at the music hall. Lava swapped their clothes after killing her, but made a mistake and put the bracelet on Martha's left hand, while she was wearing it on her right hand.";
  		finaleanswer4 = "You identified the culprit as well as the time of death. The only thing you missed was the motive of the crime. You have, however, enough evidence to prove Lava's guilt. Thanks to you, justice will be served!";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 == "LAVA" || q1 == "LAVA PEN" || q1 == "LAVAPEN") && q2.checked == true && q3.checked == false) {
  		finaleanswer1 = "Well done! You've found the murderer. Lava killed her cousin and tried to make it seem as if she was the intended target.";
  		finaleanswer2 = "That's right! Lava knew that Martha was planning not only to leave the tour and bring Daisy with her, but to stop every contact between them due to Lava's bad influence on Daisy. With Martha gone, Lava would become the legal guardian of Daisy and finally have her daughter back.";
  		finaleanswer3 = "If you look carefully at the surveillance camera footage, Lava was wearing the bracelet on her right hand when she was entering the building. However, you can see it was on the victim's left hand. It was indeed Lava who entered the building at 17:32 and Martha who arrived at 17:55, so the murder had to happen after that.";
  		finaleanswer4 = "Great job! You have successfully found the murderer and the motive for the murder. The only thing you have missed is the time of death. Nonetheless, you have once again proved that you don't carry the reputation of the Slovenian Poirot for no reason.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 == "LAVA" || q1 == "LAVA PEN" || q1 == "LAVAPEN") && q2.checked == false && q3.checked == false) {
  		finaleanswer1 = "Well done! You've found the murderer. Lava killed her cousin and tried to make it seem as if she was the intended target.";
  		finaleanswer2 = "Actually, it was the fear that Martha would take Daisy away from her that drove Lava to execute her horrid plan. Lava gave birth to Daisy when she was only a young girl herself, and Martha adopted her daughter. Now, when Lava finally reconnected with her, Martha threatened to divide them again, triggered by the bad influence that Lava had on Daisy.";
  		finaleanswer3 = "If you look carefully at the surveillance camera footage, Lava was wearing the bracelet on her right hand when she was entering the building. However, you can see it was on the victim's left hand. It was indeed Lava who entered the building at 17:32 and Martha who arrived at 17:55, so the murder had to happen after that.";
  		finaleanswer4 = "You are right about the identity of the murderer, but you haven't managed to find out the motive or the time of death. That doesn't change the fact that you have once again outdone yourself and caught the villain.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 != "LAVA" && q1 != "LAVA PEN" && q1 != "LAVAPEN") && q2.checked == true && q3.checked == true) {
  		finaleanswer1 = "Unfortunately, you didn't find the killer. It was Lava who killed Martha, swapped their clothes, and made it appear as if she was the intended target.";
  		finaleanswer2 = "That's right! Lava knew that Martha was planning not only to leave the tour and bring Daisy with her, but to stop every contact between them due to Lava's bad influence on Daisy. With Martha gone, Lava would become the legal guardian of Daisy and finally have her daughter back.";
  		finaleanswer3 = "Brilliant! The murder had to happen after 17:55 because that's when Martha arrived at the music hall. Lava swapped their clothes after killing her, but made a mistake and put the bracelet on Martha's left hand, while she was wearing it on her right hand.";
  		finaleanswer4 = "You didn't blame the right person, but you've identified the motive for the murder as well as the time of death. Lava tricked you with her charismatic personality.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 != "LAVA" && q1 != "LAVA PEN" && q1 != "LAVAPEN") && q2.checked == false && q3.checked == true) {
  		finaleanswer1 = "Unfortunately, you didn't find the killer. It was Lava who killed Martha, swapped their clothes, and made it appear as if she was the intended target.";
  		finaleanswer2 = "Actually, it was the fear that Martha would take Daisy away from her that drove Lava to execute her horrid plan. Lava gave birth to Daisy when she was only a young girl herself, and Martha adopted her daughter. Now, when Lava finally reconnected with her, Martha threatened to divide them again, triggered by the bad influence that Lava had on Daisy.";
  		finaleanswer3 = "Brilliant! The murder had to happen after 17:55 because that's when Martha arrived at the music hall. Lava swapped their clothes after killing her, but made a mistake and put the bracelet on Martha's left hand, while she was wearing it on her right hand.";
  		finaleanswer4 = "You haven't found the murderer or the motive for the murder, but you're right about the time of the murder. Lava tricked you with her charismatic personality.";
      document.getElementById("summary").style.display = "block";
  } else if ((q1 != "LAVA" && q1 != "LAVA PEN" && q1 != "LAVAPEN") && q2.checked == true && q3.checked == false) {
  		finaleanswer1 = "Unfortunately, you didn't find the killer. It was Lava who killed Martha, swapped their clothes, and made it appear as if she was the intended target.";
  		finaleanswer2 = "That's right! Lava knew that Martha was planning not only to leave the tour and bring Daisy with her, but to stop every contact between them due to Lava's bad influence on Daisy. With Martha gone, Lava would become the legal guardian of Daisy and finally have her daughter back.";
  		finaleanswer3 = "If you look carefully at the surveillance camera footage, Lava was wearing the bracelet on her right hand when she was entering the building. However, you can see it was on the victim's left hand. It was indeed Lava who entered the building at 17:32 and Martha who arrived at 17:55, so the murder had to happen after that.";
  		finaleanswer4 = "You haven't found the murderer or the murder weapon, but you're right about the motive for the murder. Lava tricked you with her charismatic personality.";
      document.getElementById("summary").style.display = "block";
	} else {
  		finaleanswer1 = "Unfortunately, you didn't find the killer. It was Lava who killed Martha, swapped their clothes, and made it appear as if she was the intended target.";
  		finaleanswer2 = "Actually, it was the fear that Martha would take Daisy away from her that drove Lava to execute her horrid plan. Lava gave birth to Daisy when she was only a young girl herself, and Martha adopted her daughter. Now, when Lava finally reconnected with her, Martha threatened to divide them again, triggered by the bad influence that Lava had on Daisy.";
  		finaleanswer3 = "If you look carefully at the surveillance camera footage, Lava was wearing the bracelet on her right hand when she was entering the building. However, you can see it was on the victim's left hand. It was indeed Lava who entered the building at 17:32 and Martha who arrived at 17:55, so the murder had to happen after that.";
  		finaleanswer4 = "Lava tricked you with her charismatic personality. The culprit got away this time, but rest assured that Vanja Petelin won't make the same mistake twice!";
      document.getElementById("summary").style.display = "block";
  	}
  document.getElementById("finale_answer1").innerHTML = finaleanswer1;
  document.getElementById("finale_answer2").innerHTML = finaleanswer2;
  document.getElementById("finale_answer3").innerHTML = finaleanswer3;
  document.getElementById("finale_answer4").innerHTML = finaleanswer4;
};
