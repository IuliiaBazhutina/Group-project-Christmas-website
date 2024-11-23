
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


//GET LOCATION FOR HOMEPAGE
const locationButton = document.getElementById("button2");
locationButton.addEventListener("click", getLocation);

function getLocation() {
    const locationElement = document.getElementById("location");
    if (navigator.geolocation) {
        locationElement.innerHTML = "Getting location...";

        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const locationElement = document.getElementById("location");
    locationElement.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
}