//COUNTDOWN FUNCTION TO DISPLAY THE TIME UNTIL XMAS
var countDownDate = new Date("December 25, 2024 00:00:00").getTime(),
    x = setInterval(function () {
        var e = new Date().getTime(),
            t = countDownDate - e;
        document.getElementById("countdown").innerHTML =
            Math.floor(t / 864e5) +
            " Days " +
            Math.floor((t % 864e5) / 36e5) +
            " Hours " +
            Math.floor((t % 36e5) / 6e4) +
            " Minutes " +
            Math.floor((t % 6e4) / 1e3) +
            " Seconds ";
    }, 1e3);

//ARRAY OF MESSAGES FOR THE FACT OF THE DAY
let messages = [
    "The image of Santa Claus flying in his sleigh first appeared in 1819",
    "The original Rudolph did not have a red nose",
    "America’s first batch of eggnog was made in the Jamestown settlement in 1607",
    "Some zoos take donated Christmas trees and use them as food for the animals",
    "In 1918, the city of Boston received a giant Christmas tree as a gift from the Canadian province of Nova Scotia",
    "Tinsel was invented in 1610 in Germany and was once made of real silver.",
    "Christmas might be a public holiday; however, it is not a biblical holy day. The Bible does not say anywhere to keep Christmas as a holy day.",
    "The ‘X’ in X-Mas, as we all use today, comes from the Greek meaning of ‘X’ i.e. Christ.",
],
    msgIndex = 0;
const button3 = document.getElementById("button3"),
    msgOutput = document.getElementById("message");
button3.addEventListener("click", function () {
    msgOutput.textContent = messages[msgIndex];
    msgIndex = (msgIndex + 1)% messages.length;
});

//BUTTON TO GET THE DISTANCE FROM USER TO THE NORTH POLE
const locationButton = document.getElementById("button2");
function getLocation() {
    let e = document.getElementById("location");
    navigator.geolocation
        ? ((e.innerHTML = "Getting distance..."),
            navigator.geolocation.getCurrentPosition(showPosition))
        : (e.innerHTML = "Geolocation is not supported by this browser.");
}
function showPosition(e) {
    let t = document.getElementById("location"),
        o = e.coords.latitude;
    t.innerHTML = `Your distance from the North Pole is: ${(
        (90 - o) *
        111.32
    ).toFixed(3)} kilometers!`;
}
locationButton.addEventListener("click", getLocation);
