(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = planetsString.split(",");

    /**
     * TODO 1:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // console.log(`TODO 1: ${planetsArray}`);
    // console.log(``)

    planetsArray = planetsString.split(`|`);
    console.log(`TODO 1`)
    console.log(planetsArray);
    console.log(``);

    /**
     * TODO 2:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an un-ordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // console.log(planetsArray.join(`<br>`))
    // console.log(`TODO 2.1: ${planetsStringBreak}`);
    // console.log(`TODO 2.2: ${planetsStringList}`);

    // updated

    let bonus = planetsArray
    let list = bonus.join(`<li>`)

    list = `<ul><li>${list}</li></ul>`
    console.log(`Bonus: ${list}`)


})();
