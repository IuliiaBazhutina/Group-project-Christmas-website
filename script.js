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

//THE FACT OF THE DAY
    const factsJSON = [
        { 
        "fact": "The image of Santa Claus flying in his sleigh first appeared in 1819", 
        "url": "https://guideposts.org/wp-content/uploads/2022/12/Vintage-colour-lithograph-from-1898-showing-Father-Christmas-and-his-reindeer-flying-through-the-sky-in-the-history-of-Santa-Claus-1024x576.jpg.optimal.jpg",
        },
        { 
        "fact": "Some zoos take donated Christmas trees and use them as food for the animals", 
        "url": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/53f4/live/5f0087c0-afd1-11ee-bc2f-cb5579b90709.jpg.webp", 
        },
        { 
        "fact": "America’s first batch of eggnog was made in the Jamestown settlement in 1607", 
        "url": "https://m.media-amazon.com/images/I/511fIDP-9QL._UF1000,1000_QL80_.jpg",
        }, 
        { 
        "fact": "The original Rudolph did not have a red nose.", 
        "url": "https://www.bodminjail.org/media/nwqhpzrb/itsdavidfish_a_tradition_dicnkes.jpg"
        },
    ]; 
    const stringJSON = JSON.stringify(factsJSON); 
    const facts = JSON.parse(stringJSON);

    let msgIndex= 0;

    const button3 = document.getElementById("button3");
    const msgOutput = document.getElementById("message");
    const factImage = document.getElementById("tipofday-image");

    button3.addEventListener("click", function () {
    msgOutput.innerHTML = facts[msgIndex].fact;
    factImage.src = facts[msgIndex].url;

    msgIndex = (msgIndex + 1) % facts.length;
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
