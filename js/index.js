// <!-- javascript source code by FreeCodeCamp -->
$(document).ready(function() {
  //Reset Countdown Timer
  $('.reset').click(function() {
    maintime = 2;
    console.log(maintime);
    return setTimer();
  });
  $('.minus').click(function() {
    if (maintime > 1) {
      maintime -= 1;
      console.log(maintime);
      return setTimer();
    };
  });
  $('.plus').click(function() {

    maintime += 1;
    return setTimer();

  });
  //Start Countdown on Timer Click
  $('.startstop button').click(function() {
    if ($(this).hasClass("numstop")) {
      $(this).removeClass("numstop");
      $(this).addClass('numstart');
      $(this).text("Stop Timer");
      countdown = setInterval(interval, 1000);
      return countdown;
    };
    if ($(this).hasClass("numstart")) {
      $(this).removeClass('numstart');
      $(this).addClass('numstop');
      $(this).text("Start Timer");
      clearInterval(countdown);
    }

  });

});

interval =
  function() {
    var timer = $('.timer h2').html();
    timer = timer.split(':');
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    seconds -= 1;
    if (minutes < 0) return clearInterval(interval);
    if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
    if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
    $('.timer h2').html(minutes + ':' + seconds);

    if (minutes == 0 && seconds == 0) {

      clearInterval(countdown);
      alert("Times Up!");
      setTimer();
      $('.startstop button').removeClass("numstart")
        .addClass('numstop')
        .text("Start Timer");
      return;
    }

  };

maintime = 2;

function setTimer() {
  $('.setme').text(maintime + ":00")
  $('.timer h2').text(maintime + ":00");
};