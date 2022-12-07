// ! Your game should:
// TODO Display a set of cards, all face down initially.

// TODO Allow the user to click on one card, and then another. When each card is clicked it should flip over and show its image or value.

// TODO Compare those two cards to one another and see if they match. If they match, keep the cards face up. Otherwise, flip the cards back over.

// TODO Keep track of how long each round lasts, and upon successful completion of the game, allow the user to input their name for "High Score" tracking.

// TODO The game should display the high score page each time a round is completed. These scores should persist across sessions, but could have an option to reset all scores.

// ! Additional Features:

// TODO Allow the user to specify how many cards for the round (an even number).

// TODO Allow the user to choose a time limit for each round.

// TODO Allow multiple users, switching between users for each turn/attempt.

// TODO Keep score, incrementing that score by a particular amount when a matching pair is found - and decrementing score when a failed attempt is made. Include that score when the round is completed, allowing it to be placed on the high score page.

// TODO Add sound effects on card click, successful match, round won and round lost. Special effect for new high score, including graphics, would be pretty sweet.

// write some code that allow the user to use the arrow keys to move from card to card
// when the card is moved too, add the class border to it
// start the code here
// write some code that allow the user to use the arrow keys to move from card to card
// when the card is moved too, add the class border to it
// start the code here
$(document).keyup(function (e) {
  var key = e.which;
  // left arrow key
  if (key == 37) {
    $(".border").removeClass("border").prev().addClass("border");
    // up arrow key
  } else if (key == 38) {
    $(".border").removeClass("border").prev().addClass("border");
    // right arrow key
  } else if (key == 39) {
    $(".border").removeClass("border").next().addClass("border");
    // down arrow key
  } else if (key == 40) {
    $(".border").removeClass("border").next().addClass("border");
  }
});

// * border on hover
$(document).ready(function () {
  $(".card").hover(function () {
    $(this).toggleClass("border");
  });
  $(".card").click(function () {
    $(this).toggleClass("card-flipped");
  });
});
