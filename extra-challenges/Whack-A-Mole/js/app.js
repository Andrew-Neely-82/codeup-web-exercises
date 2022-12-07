(() => {
  `use strict`;

  const html = {
    hole: $(`.hole`),
    mole: $(`.mole`),
    score: $(`.score-value`),
    timer: $(`.timer-value`),
    start: $(`.start-btn`),
    info: $(`.game-over h2`),
    restart: $(`.restart-btn`),
    gameOver: $(`.game-over`),
  };

  $(html.start).on(`click`, () => {
    let score = 0;
    let timer = 60;
    $(`h2:nth-of-type(3)`).text(`GO!`);
    // interval to count down the timer
    let timerId = setInterval(() => {
      timer--; 
      // music.play;
      $(html.timer).text(timer);
      if (timer === 0) {
        clearInterval(timerId);
        $(html.info).text(`Game Over`);
      }
    }, 1000);
    // interval to randomly add the mole class to a hole
    let moleId = setInterval(() => {
      let randomHole = Math.floor(Math.random() * 9);
      $(html.hole[randomHole]).addClass(`mole`);
      setTimeout(() => {
        $(html.hole[randomHole]).removeClass(`mole`);
      }, 800);
    }, 800);
    $(html.hole).click(() => {
      if ($(html.hole).hasClass(`mole`)) {
        score++;
        $(html.score).text(score);
        console.log(score);
      }
      $(".mole").click(function (event) {
        const mole = $(`.hole`).hasClass(`mole`);
        let offset = $(this).offset();
        x = event.pageX - offset.left;
        y = event.pageY - offset.top;
        console.log(`${x}, ${y}`);
        // if .mole px is within the range of the 45-50px then add to the score 50 points
        if (x >= 45 && x <= 65 && y >= 45 && y <= 65) {
          score += 9;
          $(html.score).text(score);
          console.log(score);
        }
      });
      $(html.hole).removeClass(`mole`).fadeOut;
      if (timer === 0) {
        clearInterval(moleId);
        $(html.info).text(`Game Over`);
        score = 0;
      }
    });
  });

  // * reloads the page when the restart button is clicked
  $(html.restart).on(`click`, () => {
    location.reload();
  });


  // $(".mole").mousemove(function (event) {
  //   const mole = $(`.hole`).hasClass(`mole`);
  //   let offset = $(this).offset();
  //   x = event.pageX - offset.left;
  //   y = event.pageY - offset.top;
  //   console.log(`${x}, ${y}`);
  //   // if .mole px is within the range of the 45-50px then add to the score 50 points
  //   if (x > 45 && x < 50 && y > 45 && y < 50) {
  //     score += 50;
  //     $(html.score).text(score);
  //     console.log(score);
  //   }
  // });

  // const music = {
  //   play: function playVideo() {
  //     video.play();
  //   },
  //   stop: function pauseVideo() {
  //     video.pause();
  //   },
  // };
  // const video = $(`.video`);
})();
