
// JS for Home Page

//COUNTDOWN TIMER
//https://www.w3schools.com/howto/howto_js_countdown.asp
var countDownDate = new Date("December 25, 2024 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hours "
        + minutes + " Minutes " + seconds + " Seconds, Until CHRISTMAS! ";
}, 1000);

//https://thefactfile.org/interesting-facts-christmas/
//ARRAY OF MESSAGES FOR HOMEPAGE
let messages = [
    "The image of Santa Claus flying in his sleigh first appeared in 1819",
    "The original Rudolph did not have a red nose",
    "America’s first batch of eggnog was made in the Jamestown settlement in 1607",
    "Some zoos take donated Christmas trees and use them as food for the animals",
    "In 1918, the city of Boston received a giant Christmas tree as a gift from the Canadian province of Nova Scotia",
    "Tinsel was invented in 1610 in Germany and was once made of real silver.",
    "Christmas might be a public holiday; however, it is not a biblical holy day. The Bible does not say anywhere to keep Christmas as a holy day.",
    "The ‘X’ in X-Mas, as we all use today, comes from the Greek meaning of ‘X’ i.e. Christ."
];

//CODE TO OUTPUT ALL MESSAGES ONE BY ONE ON BUTTON CLICK
let msgIndex = 0;
const cycleMsg = document.getElementById("factBut");
const msgOutput = document.getElementById("message");
cycleMsg.addEventListener("click", function () {
    msgOutput.textContent = messages[msgIndex];
    msgIndex++;
});


//GET LOCATION FOR HOMEPAGE
const locationButton = document.getElementById("button2");
locationButton.addEventListener("click", getLocation);

function getLocation() {
    const locationElement = document.getElementById("location");
    if (navigator.geolocation) {
        locationElement.innerHTML = "Getting distance...";

        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//LOCATION OF THE NORTH POLE
const northpoleLat = 90;
//LONGTITUDE NOT NEEDED FOR NORTHPOLE
// const northpoleLong = 0.0002;


//CALCULATION TO DETERMINE DISTANCE OF USER TO NORTH POLE
const locationElement = document.getElementById("location");
const kmPerDegree = 111.32; //Approx value

function showPosition(position) {
    const userLat = position.coords.latitude;
    const latitudeDiff = northpoleLat - userLat;
    const distancetoNP = latitudeDiff * kmPerDegree;

    locationElement.innerHTML = `Your distance from the North Pole is: ${distancetoNP.toFixed(3)} kilometers!`;
}