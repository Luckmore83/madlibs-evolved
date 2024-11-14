function myFunction() {

    var vehicle = prompt("Ett fordon");
    var adjective = prompt("Ett adjektiv (beskriver något)");
    var number = prompt("Ett antal");
    var tech = prompt("En teknisk pryl");
    var explative = prompt("Ett svärord");
    var location = prompt("En plats");
    var verb = prompt("Ett verb (något man gör)");
    var adjective2 = prompt("Ett adjektiv som slutar på t (beskriver något, t.ex. kallt)");

document.write("Vi körde ut till skogen i farsans " + vehicle + " och försökte hitta en " + adjective + " plats vid sjön.Jag hade bl.a. med mig en kortlek, " + number + " korvar med korvbröd och " + tech + ". Det hann knappt gå 5 min innan vi hörde hur farsan utbrast; " + explative + "!!! Han hade glömt grillkolen i " + location + ". Förutom att vi fick " + verb + " råa korvar så var det väldigt " + adjective2 + ".");
}