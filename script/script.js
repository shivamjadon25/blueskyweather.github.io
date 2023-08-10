
const locationName = document.querySelector(".location");
let infoImg = document.querySelector(".cloudy img");
let infoText = document.querySelector(".cloudy h2");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind h2");
let humidity = document.querySelector(".humidity h2");
let daytime = document.querySelector(".daytime");
let time = document.querySelector(".weather span");
const mainimage = document.querySelector(".mainimage img")
const inputField = document.getElementById("searchInput");
let loadingIndicator = document.getElementById("loadingIndicator");
const weather = document.getElementById("weather");
const imgBx1 = document.getElementById("imgBx1");
const imgBx2 = document.getElementById("imgBx2");
const imgBx3 = document.getElementById("imgBx3");
const imgBx4 = document.getElementById("imgBx4");
const imgBx5 = document.getElementById("imgBx5");
const forecasttemp1 = document.querySelector(".forecasttemp1");
const forecasttemp2 = document.querySelector(".forecasttemp2");
const forecasttemp3 = document.querySelector(".forecasttemp3");
const forecasttemp4 = document.querySelector(".forecasttemp4");
const forecasttemp5 = document.querySelector(".forecasttemp5");
let forecastdate1 = document.querySelector(".forecastdate1");
let forecastdate2 = document.querySelector(".forecastdate2");
let forecastdate3 = document.querySelector(".forecastdate3");
let forecastdate4 = document.querySelector(".forecastdate4");
let forecastdate5 = document.querySelector(".forecastdate5");
const mintemp1 = document.getElementById("mintemp1");
const mintemp2 = document.getElementById("mintemp2");
const mintemp3 = document.getElementById("mintemp3");
const mintemp4 = document.getElementById("mintemp4");
const mintemp5 = document.getElementById("mintemp5");
const rain1 = document.getElementById("rain1");
const rain2 = document.getElementById("rain2");
const rain3 = document.getElementById("rain3");
const rain4 = document.getElementById("rain4");
const rain5 = document.getElementById("rain5");
const maxtemp1 = document.getElementById("maxtemp1");
const maxtemp2 = document.getElementById("maxtemp2");
const maxtemp3 = document.getElementById("maxtemp3");
const maxtemp4 = document.getElementById("maxtemp4");
const maxtemp5 = document.getElementById("maxtemp5");
const sunrisetime = document.querySelector(".sunrisetime");
const sunsettime = document.querySelector(".sunsettime");
const aqivalue = document.querySelector(".aqivalue");
const aqistatus = document.querySelector(".aqistatus");
const pressure = document.querySelector(".pressure span");
const winddirection = document.querySelector(".winddirection span");
const uv = document.querySelector(".uv span");
const feelslike = document.querySelector(".feelslike span");


let globalWeatherData; // Declare a global variable to store the weather data

async function getWeatherData(city) {
    let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=100a6ef3d6c34ddd928142640230708&q=${city}&days=6&aqi=yes&alerts=no`
    try {
        const response = await fetch(apiUrl);
        const data = await response.json(); 
        locationName.innerText = `${data.location.name}, ${data.location.country}`;
        infoText.innerText = data.current.condition.text;
        infoImg.src = `${"http:"}`+ data.current.condition.icon;
        temp.innerText = Math.round(data.current.temp_c) + "°c";
        wind.innerText = data.current.wind_kph + "km/h";
        humidity.innerText = data.current.humidity + "%"; 
        forecasttemp1.innerText = data.forecast.forecastday[1].day.avgtemp_c + "°c";
        forecasttemp2.innerText = data.forecast.forecastday[2].day.avgtemp_c + "°c";
        forecasttemp3.innerText = data.forecast.forecastday[3].day.avgtemp_c + "°c";
        forecasttemp4.innerText = data.forecast.forecastday[4].day.avgtemp_c + "°c";
        forecasttemp5.innerText = data.forecast.forecastday[5].day.avgtemp_c + "°c";

        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function dateFormat(d){
        var t = new Date(d);
        return (t.getDate()+' '+monthNames[t.getMonth()]+' '+t.getFullYear()).toString();
        }
        var objDate1 = dateFormat(data.forecast.forecastday[1].date)
        var objDate2 = dateFormat(data.forecast.forecastday[2].date)
        var objDate3 = dateFormat(data.forecast.forecastday[3].date);
        var objDate4 = dateFormat(data.forecast.forecastday[4].date);
        var objDate5 = dateFormat(data.forecast.forecastday[5].date);

        forecastdate1.innerText = objDate1;
        forecastdate2.innerText = objDate2;
        forecastdate3.innerText = objDate3;
        forecastdate4.innerText = objDate4;
        forecastdate5.innerText = objDate5;

        mintemp1.innerText = data.forecast.forecastday[1].day.mintemp_c ;
        mintemp2.innerText = data.forecast.forecastday[2].day.mintemp_c;
        mintemp3.innerText = data.forecast.forecastday[3].day.mintemp_c;
        mintemp4.innerText = data.forecast.forecastday[4].day.mintemp_c;
        mintemp5.innerText = data.forecast.forecastday[5].day.mintemp_c;

        maxtemp1.innerText = data.forecast.forecastday[1].day.maxtemp_c;
        maxtemp2.innerText = data.forecast.forecastday[2].day.maxtemp_c;
        maxtemp3.innerText = data.forecast.forecastday[3].day.maxtemp_c;
        maxtemp4.innerText = data.forecast.forecastday[4].day.maxtemp_c;
        maxtemp5.innerText = data.forecast.forecastday[4].day.maxtemp_c;

        rain1.innerText = data.forecast.forecastday[1].day.daily_chance_of_rain + "%";
        rain2.innerText = data.forecast.forecastday[2].day.daily_chance_of_rain + "%";
        rain3.innerText = data.forecast.forecastday[3].day.daily_chance_of_rain + "%";
        rain4.innerText = data.forecast.forecastday[4].day.daily_chance_of_rain + "%";
        rain5.innerText = data.forecast.forecastday[5].day.daily_chance_of_rain + "%";

        sunrisetime.innerText = data.forecast.forecastday[0].astro.sunrise;
        sunsettime.innerText = data.forecast.forecastday[0].astro.sunset;

         let aqi = data.current.air_quality["gb-defra-index"];
        if(aqi == 1){
            aqivalue.innerText = "11"
            aqistatus.innerText = "Low" 
        }else if(aqi == 2){
            aqivalue.innerText = "13" 
            aqistatus.innerText = "Low" 
        }else if(aqi == 3){
            aqivalue.innerText = "35" 
            aqistatus.innerText = "Low" 
        }else if(aqi == 4){
            aqivalue.innerText = "41" 
            aqistatus.innerText = "Moderate" 
        }else if(aqi == 5){
            aqivalue.innerText = "47"
            aqistatus.innerText = "Moderate"  
        }else if(aqi == 6){
            aqivalue.innerText = "53" 
            aqistatus.innerText = "Moderate" 
        }else if(aqi == 7){
            aqivalue.innerText = "58"
            aqistatus.innerText = "High"  
        }else if(aqi == 8){
            aqivalue.innerText = "64"
            aqistatus.innerText = "High"  
        }else if(aqi == 9){
            aqivalue.innerText = "70"
            aqistatus.innerText = "High"  
        }else if(aqi == 10){
            aqivalue.innerText = "80" 
            aqistatus.innerText = "Very High" 
        }

        pressure.innerText = Math.round(data.current.pressure_mb/1013) +" ATM";
        winddirection.innerText = data.current.wind_dir;
        uv.innerText = data.current.uv;
        feelslike.innerText = data.current.feelslike_c + "°c";

        let dateTimeString = data.location.localtime;
        const [datePart, timePart] = dateTimeString.split(" ");
        const [year, month, day] = datePart.split("-");
        const [hour, minute] = timePart.split(":");
        const dayOfWeek = new Date(year, month - 1, day).getDay();
        var dayName;
        if(dayOfWeek==0){
            dayName = "Sunday"
        }else if(dayOfWeek==1){
            dayName = "Monday"
        }else if(dayOfWeek==2){
            dayName = "Tuesday"
        }else if(dayOfWeek==3){
            dayName = "Wednesday"
        }else if(dayOfWeek==4){
            dayName = "Thursday"
        }else if(dayOfWeek==5){
            dayName = "Friday"
        }else if(dayOfWeek==6){
            dayName = "Saturday"
        }
        let timeDiv = document.createElement("div")
        timeDiv.className = "time"
        timeDiv.innerHTML = `${hour}:${minute}`
        daytime.innerText = `${dayName}, `;
        daytime.append(timeDiv);
        let condition = data.current.condition.text;
        if(condition == "Sunny"){
            mainimage.src = "images/clear.svg"
            locationName.style.backgroundImage = `url("images/clearlocation.jpg")`;
        }else if(condition == "Partly cloudy"){
            mainimage.src = "images/cloud.svg"
            locationName.style.backgroundImage = `url("images/cloudylocation.jpg")`;
        }else if(condition == "Cloudy"){
            mainimage.src = "images/cloud.svg"
            locationName.style.backgroundImage = `url("images/cloudylocation.jpg")`;
        }else if(condition == "Mist"){
            mainimage.src = "images/haze.svg"
        }else if(condition == "Blowing snow"){
            mainimage.src = "images/snow.svg"
        }else if(condition == "Blizzard"){
            mainimage.src = "images/snow.svg"
        }else if(condition == "Fog"){
            mainimage.src = "images/haze.svg"
        }else if(condition == "Heavy rain"){
            mainimage.src = "images/storm.svg"
            locationName.style.backgroundImage = `url("images/rainlocation.jpg")`;
        }else if(condition == "Moderate rain"){
            mainimage.src = "images/rain.svg"
            locationName.style.backgroundImage = `url("images/rainlocation.jpg")`;
        }else if(condition == "Light rain"){
            mainimage.src = "images/rain.svg"
            locationName.style.backgroundImage = `url("images/rainlocation.jpg")`;
        }else if(condition == "Light rain shower"){
            mainimage.src = "images/rain.svg"
            locationName.style.backgroundImage = `url("images/rainlocation.jpg")`;
        }if(condition == "Clear"){
            mainimage.src = "images/clear.svg"
            locationName.style.backgroundImage = `url("images/clearlocation.jpg")`;
        }
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

inputField.addEventListener("keydown", async function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const searchText = inputField.value;
        loadingIndicator.style.display = "block"; 
        // Hide all components except the search bar
        document.querySelectorAll(".weather, .leftsidebar .profile, .rightcontainer, .todaysdata, .todaysdataname, .forecastname").forEach(component => {
            component.style.display = "none";
        });

        try {
            const weatherData = await getWeatherData(searchText);

            // Use setTimeout to simulate loading for 2 seconds
            setTimeout(() => {
                loadingIndicator.style.display = "none";
                // Show back the components
                document.querySelectorAll(".weather, .leftsidebar .profile, .rightcontainer, .todaysdata, .todaysdataname, .forecastname").forEach(component => {
                    component.style.display = "block";
                });
                document.querySelectorAll(" .rightcontainer, .todaysdata, .todaysdataname, .forecastname").forEach(component => {
                    component.style.display = "flex";
                });
            }, 2000); // 2000 milliseconds = 2 seconds
        } catch (error) {
            console.error("Error fetching weather data:", error);
            loadingIndicator.style.display = "none"; // Hide the loading indicator
        }
    }
});
