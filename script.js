
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
        + minutes + " Minutes " + seconds + " Seconds ";
}, 1000);

//https://thefactfile.org/interesting-facts-christmas/
//ARRAY OF MESSAGES FOR HOMEPAGE

    "The ‘X’ in X-Mas, as we all use today, comes from the Greek meaning of ‘X’ i.e. Christ.",
],
    msgIndex = 0;
const cycleMsg = document.getElementById("factBut"),
    msgOutput = document.getElementById("message");
cycleMsg.addEventListener("click", function () {
    (msgOutput.textContent = messages[msgIndex]), msgIndex++;
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
