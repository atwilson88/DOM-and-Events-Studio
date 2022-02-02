// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    //Something goes here.
    console.log('window loaded');

    let takeoff = document.getElementById("takeoff");
    let flightStatus2 = document.getElementById("flightStatus");
    let shuttleBackground2 = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    const directionButtons = document.querySelectorAll("button");

    takeoff.addEventListener("click", function (event) {
        let confirmStatus = window.confirm("Confirm that the shuttle is ready for takeoff.");
      flightStatus2.innerHTML = "Shuttle in flight.";
      shuttleBackground2.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = "10,000";
    });

    landing.addEventListener("click", function (event) {
        let landStatus = window.confirm("The shuttle is landing. Landing gear engaged.");
        flightStatus2.innerHTML = "Shuttle has landed.";
        shuttleBackground2.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    });

    missionAbort.addEventListener("click", function (event) {
        let abortMiss = window.confirm("Confirm that you want to abort the mission.");
        flightStatus2.innerHTML = "Mission aborted.";
        shuttleBackground2.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    });
    
    directionButtons[0].addEventListener("click", function (event) {
        document.getElementById("rocket").style.top = "-10px";
        shuttleHeight.innerHTML = "10,000";
    });

    directionButtons[1].addEventListener("click", function (event) {
        document.getElementById("rocket").style.bottom = "10px";
        shuttleHeight.innerHTML = "0";

    });
    directionButtons[2].addEventListener("click", function (event) {
        document.getElementById("rocket").style.right = "10px";

    });
    directionButtons[3].addEventListener("click", function (event) {
        document.getElementById("rocket").style.left = "10px";

    });
   


});