// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   let formButton = document.getElementById("formSubmit");

   formButton.addEventListener("click", function() {
      let launchStatus = document.getElementById("launchStatus");
      //doing this to reset the color after each click, so it won't be red nor green unless it should be
      launchStatus.style.color = "black";

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      //doing this to reset the color after each click
      fuelStatus.style.color = "black";
      cargoStatus.style.color = "black";

      let isReady = null;

      let missionTarget = document.getElementById("missionTarget");

      //gives an alert if Pilot or Copilot names are numbers, or if fuelLevel or cargoMass are not numbers
      if (pilotName.value == false || copilotName.value == false || fuelLevel.value == false || cargoMass.value == false) {
         window.alert("All fields are required!");
         isReady = false;
      } else if (!(isNaN(Number(pilotName.value))) || !(isNaN(Number(copilotName.value)))
         || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
         window.alert("Make sure to enter valid information for each field! \nNames should be letters \nFuel and Cargo Mass should be numbers");
         isReady = false;
      } else {
         isReady = true;
      }


      //making sure the form is filled out properly to reveal the checklist
      //checklist remains hidden if invalid inputs given to form
      if (isReady) {
         faultyItems.style.visibility = "visible";
      } else {
         faultyItems.style.visibility = "hidden";
      }

      pilotStatus.innerHTML = `${pilotName.value} ready`;
      copilotStatus.innerHTML = `${copilotName.value} ready`;


      if (isReady && fuelLevel.value < 10000) {
         fuelStatus.innerHTML = "Not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         fuelStatus.style.color = "red";
         isReady = false;
      } else {
         fuelStatus.innerHTML = "Enough fuel for the journey";
      }

      if (cargoMass.value > 10000) {
         cargoStatus.innerHTML = "Too much mass to take off";
         cargoStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         isReady = false;
      } else {
         cargoMass.innerHTML = "Cargo mass is low enough for launch";
      }

      if (isReady) {
         launchStatus.innerHTML = "Shuttle is ready for launch.";
         launchStatus.style.color = "green";
      }
      event.preventDefault();

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {

            missionTarget.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">`;
         });
      });

   });

});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
