window.addEventListener("load", function () {
    console.log("window loaded");
    




let takeoffButton = document.getElementById("takeoff");
let flightStatus = document.getElementById("flightStatus");
let shuttleBackground = document.getElementById("shuttleBackground");
let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
let spaceShuttleHeightNumber = parseInt(spaceShuttleHeight.innerHTML);
let landButton = document.getElementById("landing");
let abortButton = document.getElementById("missionAbort");
let up = document.getElementById('up');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right');
let rocket = document.getElementById('rocket');
let rocketHeightPosition = rocket.style.bottom = "0px";
let rocketHeightPositionNumber = parseInt(rocketHeightPosition);
let rocketLeftPosition = rocket.style.left = "250px";
let rocketLeftPositionNumber = parseInt(rocketLeftPosition);





takeoffButton.addEventListener("click", function(){
    console.log ("Takeoff button clicked");
    let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");

    if (takeoffConfirm === true) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.background = "blue";
        spaceShuttleHeight.innerHTML = spaceShuttleHeightNumber += 10000;
        rocket.style.bottom = (rocketHeightPositionNumber += 10) + "px";
    }
    
     
})




landButton.addEventListener("click", function() {
    console.log ("Land button clicked");
    let landAlert = window.alert("The shuttle is landing. Landing gear engaged.");
    landAlert;
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.background = "green";
    spaceShuttleHeight.innerHTML = 0;
    rocketHeightPositionNumber = 0;
    rocketLeftPositionNumber = 250;
    rocket.style.bottom = rocketHeightPositionNumber + "px";
    rocket.style.left = rocketLeftPositionNumber + "px";
})

abortButton.addEventListener("click", function() {
    console.log("Abort button clicked");
    let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
    if (abortConfirm === true) {
        flightStatus.innerHTML = "Mission Aborted.";
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocketHeightPositionNumber = 0;
        rocketLeftPositionNumber = 250;
        rocket.style.bottom = rocketHeightPositionNumber + "px";
        rocket.style.left = rocketLeftPositionNumber + "px";
    }

})

up.addEventListener("click", function () {
    
    if (rocketHeightPositionNumber >= 250) {
        return;
    };
    
    spaceShuttleHeight.innerHTML = spaceShuttleHeightNumber += 10000;
    rocket.style.bottom = (rocketHeightPositionNumber += 10) + "px";
    
    

    
    
    
})

down.addEventListener("click", function () {
    
    if (spaceShuttleHeightNumber <= 0){
        return;
    };
    spaceShuttleHeight.innerHTML = spaceShuttleHeightNumber -= 10000;
    
    if (rocketHeightPositionNumber <= 0){
        return;
    };
    rocket.style.bottom = (rocketHeightPositionNumber -= 10) + "px";


    


})

right.addEventListener("click", function () {
    
    if (rocketLeftPositionNumber >= 510) {
        return;
    };
    
    rocket.style.left = (rocketLeftPositionNumber += 10) + "px";
    
    
    
    
})


left.addEventListener("click", function () {
    
    if (rocketLeftPositionNumber < -10) {
        return;
    }
    rocket.style.left = (rocketLeftPositionNumber -= 10) + "px";
    
    
})





})