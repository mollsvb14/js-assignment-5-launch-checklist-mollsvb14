// Write your JavaScript code here!

// const { validateInput, formSubmission } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let form= document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotNameInput=document.querySelector("input[name=pilotName]");
        let copilotNameInput=document.querySelector("input[name=copilotName]");
        let fuelLevelInput=document.querySelector("input[name=fuelLevel]");
        let cargoMassInput=document.querySelector("input[name=cargoMass]");
        
        if (validateInput(pilotNameInput.value) === "Empty" || validateInput(copilotNameInput.value) === "Empty" || validateInput(fuelLevelInput.value)==="Empty" || validateInput(cargoMassInput.value)==="Empty"){
            alert("All Fields are required!") 
            return;
        }


        if(validateInput(pilotNameInput.value)==="Is a Number" || validateInput(copilotNameInput.value)==="Is a Number"){
            alert("Copilot and Pilot must have a alphabetical value!")
            return;
        }

        if(validateInput(fuelLevelInput.value)==="Not a Number" || validateInput(cargoMassInput.value)==="Not a Number"){
            alert("Fuel level and Cargo Mass have to have a numerical value!")
            return;
        } 


        formSubmission(document ,"list", pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value)
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       let randomPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});