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

    console.log(`TODO 1: ${planetsArray}`);

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

    let planetsStringBreak = "Mercury<br>Venus<br>EarthMars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    let planetsStringList = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>"
    console.log(`TODO 2.1: ${planetsStringBreak}`);
    console.log(`TODO 2.2: ${planetsStringList}`);



})();
