let lookupbtn = document.querySelector(".btn");
let ipdisplay = document.querySelector(".ip-display");
let locdisplay = document.querySelector(".loc-display");
let geodisplay = document.querySelector(".geo-display");
let loader = document.querySelector(".loader-container");
let details = document.querySelector(".details");
let btn = document.querySelector(".btn");
let clear = document.querySelector(".clear");

lookupbtn.addEventListener("click", () => {

    loader.style.display = "flex";
    details.style.display = "none";

    axios.get("https://ipapi.co/json/").then(response => { // Requesting api to get data - get request ; 'then' will return a promise

        loader.style.display = "none";
        details.style.display = "block";

        ipdisplay.textContent = `IP : ${response.data.ip}`;
        locdisplay.textContent = `Location : ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
        geodisplay.textContent = `Latitude : ${response.data.latitude}, Longitude : ${response.data.longitude}`;

    }); 
});

clear.addEventListener('click', () => {
        loader.style.display = "none";
        ipdisplay.textContent = `IP Address`;
        locdisplay.textContent = `Location`;
        geodisplay.textContent = `GeoLocation`;
})




