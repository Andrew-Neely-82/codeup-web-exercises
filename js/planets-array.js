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
