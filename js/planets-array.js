(function(){
    "use strict";

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO 1:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('TODO 1.1: Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("Sun");
    console.log(planets);
    console.log(``);


    console.log('TODO 1.2: Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto')
    console.log(planets);
    console.log(``);


    console.log('TODO 1.3: Removing "The Sun" from the beginning of the planets array.');
    planets.shift('Sun');
    console.log(planets);
    console.log(``);


    console.log('TODO 1.4: Removing "Pluto" from the end of the planets array.');
    planets.pop('Pluto');
    console.log(planets);
    console.log(``);


    console.log('TODO 1.5: Finding and logging the index of "Earth" in the planets array.');
    console.log(`Index of Earth is: ${planets.indexOf("Earth")}`);
    console.log(planets);
    console.log(``);


    console.log("TODO 1.6: Reversing the order of the planets array.");
    planets.reverse()
    console.log(planets);
    console.log(``);


    console.log("TODO 1.7: Sorting the planets array.");
    planets.sort()
    console.log(planets);
    console.log(``);

})();


/* (function () {
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.unshift("The Sun");
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.push("Pluto");
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.shift();
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.pop();
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    var indexOfEarth = planets.indexOf("Earth");
    console.log(indexOfEarth);
    logPlanets();

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    var planetAfterEarth = planets.splice(indexOfEarth + 1, 1);
    logPlanets();

    console.log('Using splice to add back the  after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.splice(indexOfEarth + 1, 0, planetAfterEarth[0]);
    logPlanets();

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.reverse();
    logPlanets();

    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.sort()
    logPlanets();

})();

 */
