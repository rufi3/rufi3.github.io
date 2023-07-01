let vh = window.innerHeight * 0.1

document.documentElement.style.setProperty('--vh', `${vh}px`);

var timeouthide1
var timeoutshow2
var timeouthide2
var timeoutshow3
var timeouthide3
var timeoutshow4
var timeouthide4
var timeoutshow5
var timeouthide5
var timeoutshow6
var timeouthide6

function play_all() {
  var audio_all = document.getElementById("audio_all");
  var text_button = document.getElementById("pad_veliki").textContent;
  function showText1(){document.getElementById("scrolling_text_1").style.display = "block"};
  function showText2(){document.getElementById("scrolling_text_2").style.display = "block"};
  function showText3(){document.getElementById("scrolling_text_3").style.display = "block"};
  function showText4(){document.getElementById("scrolling_text_4").style.display = "block"};
  function showText5(){document.getElementById("scrolling_text_5").style.display = "block"};
  function showText6(){document.getElementById("scrolling_text_6").style.display = "block"};
  function hideText1(){document.getElementById("scrolling_text_1").style.display = "none"};
  function hideText2(){document.getElementById("scrolling_text_2").style.display = "none"};
  function hideText3(){document.getElementById("scrolling_text_3").style.display = "none"};
  function hideText4(){document.getElementById("scrolling_text_4").style.display = "none"};
  function hideText5(){document.getElementById("scrolling_text_5").style.display = "none"};
  function hideText6(){document.getElementById("scrolling_text_6").style.display = "none"};
  if (text_button == 'play song') {
    audio_all.play();
    document.getElementById("pad_veliki").textContent = 'stop song';
    showText1();
    timeouthide1 = setTimeout(hideText1, 5600);
    timeoutshow2 = setTimeout(showText2, 5600);
    timeouthide2 = setTimeout(hideText2, 11200);
    timeoutshow3 = setTimeout(showText3, 11200);
    timeouthide3 = setTimeout(hideText3, 16800);
    timeoutshow4 = setTimeout(showText4, 16800);
    timeouthide4 = setTimeout(hideText4, 22400);
    timeoutshow5 = setTimeout(showText5, 22400);
    timeouthide5 = setTimeout(hideText5, 28000);
    timeoutshow6 = setTimeout(showText6, 28000);
    timeouthide6 = setTimeout(hideText6, 33600);
  } else {
    document.getElementById("pad_veliki").textContent = 'play song';
    audio_all.pause();
    audio_all.currentTime = 0;
    clearTimeout(timeouthide1);
    clearTimeout(timeoutshow2);
    clearTimeout(timeouthide2);
    clearTimeout(timeoutshow3);
    clearTimeout(timeouthide3);
    clearTimeout(timeoutshow4);
    clearTimeout(timeouthide4);
    clearTimeout(timeoutshow5);
    clearTimeout(timeouthide5);
    clearTimeout(timeoutshow6);
    clearTimeout(timeouthide6);
    hideText1();
    hideText2();
    hideText3();
    hideText4();
    hideText5();
    hideText6();
  }
}

function play_01() {
  var audio_01 = document.getElementById("audio_01");
  audio_01.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_02() {
  var audio_02 = document.getElementById("audio_02");
  audio_02.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_03() {
  var audio_03 = document.getElementById("audio_03");
  audio_03.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_04() {
  var audio_04 = document.getElementById("audio_04");
  audio_04.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_05() {
  var audio_05 = document.getElementById("audio_05");
  audio_05.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_06() {
  var audio_06 = document.getElementById("audio_06");
  audio_06.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_07() {
  var audio_07 = document.getElementById("audio_07");
  audio_07.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_08() {
  var audio_08 = document.getElementById("audio_08");
  audio_08.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_09() {
  var audio_09 = document.getElementById("audio_09");
  audio_09.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_10() {
  var audio_10 = document.getElementById("audio_10");
  audio_10.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_11() {
  var audio_11 = document.getElementById("audio_11");
  audio_11.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_12() {
  var audio_12 = document.getElementById("audio_12");
  audio_12.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_13() {
  var audio_13 = document.getElementById("audio_13");
  audio_13.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_14() {
  var audio_14 = document.getElementById("audio_14");
  audio_14.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_15() {
  var audio_15 = document.getElementById("audio_15");
  audio_15.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_16() {
  var audio_16 = document.getElementById("audio_16");
  audio_16.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_17() {
  var audio_17 = document.getElementById("audio_17");
  audio_17.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_18() {
  var audio_18 = document.getElementById("audio_18");
  audio_18.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_19() {
  var audio_19 = document.getElementById("audio_19");
  audio_19.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_20() {
  var audio_20 = document.getElementById("audio_20");
  audio_20.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_21() {
  var audio_21 = document.getElementById("audio_21");
  audio_21.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_22() {
  var audio_22 = document.getElementById("audio_22");
  audio_22.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_23() {
  var audio_23 = document.getElementById("audio_23");
  audio_23.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_24() {
  var audio_24 = document.getElementById("audio_24");
  audio_24.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_25() {
  var audio_25 = document.getElementById("audio_25");
  audio_25.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_26() {
  var audio_26 = document.getElementById("audio_26");
  audio_26.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_27() {
  var audio_27 = document.getElementById("audio_27");
  audio_27.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_28() {
  var audio_28 = document.getElementById("audio_28");
  audio_28.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_29() {
  var audio_29 = document.getElementById("audio_29");
  audio_29.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_30() {
  var audio_30 = document.getElementById("audio_30");
  audio_30.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_31() {
  var audio_31 = document.getElementById("audio_31");
  audio_31.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_32() {
  var audio_32 = document.getElementById("audio_32");
  audio_32.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_33() {
  var audio_33 = document.getElementById("audio_33");
  audio_33.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_34() {
  var audio_34 = document.getElementById("audio_34");
  audio_34.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_35() {
  var audio_35 = document.getElementById("audio_35");
  audio_35.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_36() {
  var audio_36 = document.getElementById("audio_36");
  audio_36.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_37() {
  var audio_37 = document.getElementById("audio_37");
  audio_37.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_38() {
  var audio_38 = document.getElementById("audio_38");
  audio_38.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_39() {
  var audio_39 = document.getElementById("audio_39");
  audio_39.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_40() {
  var audio_40 = document.getElementById("audio_40");
  audio_40.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_41() {
  var audio_41 = document.getElementById("audio_41");
  audio_41.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}

function play_42() {
  var audio_42 = document.getElementById("audio_42");
  audio_42.play();
  audio_all.pause();
  document.getElementById("pad_veliki").textContent = 'play song';
  document.getElementById("scrolling_text").style.color = "black";
  document.getElementById("scrolling_text").stop();
}
