const lookupbtn = document.querySelector(".btn");
const ipdisplay = document.querySelector(".ip-display");
const locdisplay = document.querySelector(".loc-display");
const geodisplay = document.querySelector(".geo-display");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details");
const btn = document.querySelector(".btn");

lookupbtn.addEventListener("click", () => {

    loader.style.display = "flex";
    details.style.display = "none";

    axios.get("https://ipapi.co/json/").then(response => { // Requesting api to get data - get request ; 'then' will return a promise

        loader.style.display = "none";
        details.style.display = "block";

        ipdisplay.textContent = `IP : ${response.data.ip}`;
        locdisplay.textContent = `Location : ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
        geodisplay.textContent = `Latitude : ${response.data.latitude}, Longitude : ${response.data.longitude}`;

        btn.textContent = `Clear`;

    }); 
});


