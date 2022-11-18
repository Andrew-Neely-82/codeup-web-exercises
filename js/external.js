"use strict";

(() => {
  console.log("Hello from external JavaScript");

  alert("Welcome to my Website!");

  let favoriteColor = prompt("What is your favorite color?");

  alert(favoriteColor + " is mine too!");

  // Question 3

  // 3.1

  // You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
  // and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much
  // will you have to pay?

  const pricePerDay = 3;

  let mermaid = prompt("How many days do you want to rent The Little Mermaid?");
  let bear = prompt("How many days do you want to rent Brother Bear?");
  let hercules = prompt("How many days do you want to rent Hercules?");

  let movieRentalTotal = pricePerDay * mermaid + pricePerDay * bear + pricePerDay * hercules;
  console.log("Movie rent total is $" + movieRentalTotal);
  alert("Your total for renting is $" + movieRentalTotal);

  // 3.2

  // Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate
  // per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You
  // worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

  const googlePerHour = 400;
  const amazonPerHour = 380;
  const facebookPerHour = 350;
  let googleHoursWorked = prompt("How many hours have you worked at Google");
  let amazonHoursWorked = prompt("How many hours have you worked Amazon");
  let facebookHoursWorked = prompt("How many hours have you worked Facebook");

  let totalPay = googlePerHour * googleHoursWorked + amazonPerHour * amazonHoursWorked + facebookPerHour * facebookHoursWorked;
  console.log("Wages earned is $" + totalPay);
  alert("You made $" + totalPay + " this week");

  // 3.3

  // A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
  // her current schedule.

  let fullClass = confirm("Is the class full");
  let schedule = confirm("Does this interfere with your schedule");

  if (fullClass === false && schedule === false) {
    alert("You can be enrolled in this class");
  } else alert("You can not be enrolled in this class");

  // 3.4

  // A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium
  // members do not need to buy a specific amount of products.

  let userOffer = prompt("How many things are you buying?");
  let expiredOffer = confirm("Press OK if offer still valid.");
  let premiumOffer = confirm("Press OK if Premium Member.");

  if ((userOffer > 2 || premiumOffer) && expiredOffer) {
    alert("Offer can be applied.");
  } else alert("Offer can not be applied");
})();
