// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let innerHtml = `<h2>Mission Destination</h2><ol> <li>Name:${name} </li><li>Diameter:${diameter} </li><li>Star: ${star}</li><li>Distance from Earth:${distance} </li><li>Number of Moons:${moons} </li></ol><img src="${imageUrl}">`
  let missiontarget =  document.getElementById("missionTarget");
        missiontarget.innerHTML = innerHtml
}

function validateInput(testInput) {
    if (testInput.length===0){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number"
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotNameInput=document.getElementById("pilotStatus");
   pilotNameInput.innerHTML=`${pilot} Ready`
   let copilotNameInput=document.getElementById("copilotStatus");
   copilotNameInput.innerHTML=`${copilot} Ready`

   let faultyItems=document.getElementById("faultyItems");
   
if (fuelLevel<10000) {
    faultyItems.style.visibility="visible"
    let launchStatus=document.getElementById("launchStatus")
    launchStatus.innerHTML="Shuttle not ready for launch"
    launchStatus.style.backgroundColor="red"
}

if (cargoLevel>10000){
    faultyItems.style.visibility="visible"
    let cargoStatus=document.getElementById("cargoStatus")
     cargoStatus.innerHTML="Shuttle not ready for launch"
    cargoStatus.style.backgroundColor="red"
}
if (fuelLevel>10000 && cargoLevel<10000){
    let launchStatus=document.getElementById("launchStatus")
    launchStatus.innerHTML="Shuttle is ready for launch"
    launchStatus.style.backgroundColor="green"
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet= Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
