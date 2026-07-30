const apiKey="YOUR_API_KEY";

async function getWeather(){

const city=document.getElementById("city").value;
const weather=document.getElementById("weather");

if(city===""){
weather.innerHTML="Please enter a city.";
return;
}

try{

const response=await fetch(
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
);

if(!response.ok){
throw new Error("City not found");
}

const data=await response.json();

weather.innerHTML=`
<h2>${data.name}, ${data.sys.country}</h2>
<p>🌡️ Temperature: ${data.main.temp} °C</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
<p>💨 Wind Speed: ${data.wind.speed} m/s</p>
<p>🌥️ Weather: ${data.weather[0].description}</p>
`;

}catch(error){

weather.innerHTML=<p>${error.message}</p>;

}

}