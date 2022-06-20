$(".okvir")[0].style.display = "block";

// next question
function next(id) {
  $(".okvir")[id - 1].style.display = "none";
  $(".okvir")[id].style.display = "block";
}
// final result
$("#submitBtn").click(function () {
  var score = 0;
  var incorrectScore = 0;
  if (document.getElementById("correct1").checked) {
    score++;
  } else {
    incorrectScore++;
  }
  if (document.getElementById("correct2").checked) {
    score++;
  } else {
    incorrectScore++;
  }
  if (document.getElementById("correct3").checked) {
    score++;
  } else {
    incorrectScore++;
  }
  if (document.getElementById("correct4").checked) {
    score++;
  } else {
    incorrectScore++;
  }
  if (document.getElementById("correct5").checked) {
    score++;
  } else {
    incorrectScore++;
  }
  $(".rezultati").append("Tačni odgovori: " + score + "<br>");
  $(".rezultati").append("Netačni odgovori: " + incorrectScore);
  $(".okvir").remove();
});
$("#tryAgain").click(function () {
  location.reload();
});
