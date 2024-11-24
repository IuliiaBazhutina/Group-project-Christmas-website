
// JS for Home Page

//https://thefactfile.org/interesting-facts-christmas/
//ARRAY OF MESSAGES FOR HOMEPAGE
let messages = [
    "The image of Santa Claus flying in his sleigh first appeared in 1819",
    "The original Rudolph did not have a red nose",
    "America’s first batch of eggnog was made in the Jamestown settlement in 1607",
    "Some zoos take donated Christmas trees and use them as food for the animals",
    "In 1918, the city of Boston received a giant Christmas tree as a gift from the Canadian province of Nova Scotia",
    "Tinsel was invented in 1610 in Germany and was once made of real silver."
];

//////////ADD FUNCTION HERE TO CYCLE THROUGH MESSAGES ON HOME PAGE

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

//NO LONGER NEEDED AS PER FUNCTION BELOW
// function showPosition(position) {
//     const locationElement = document.getElementById("location");
//     locationElement.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
// }

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