let locName=document.getElementById("loc-name")
let temp=document.getElementById("temperature");

let desc=document.getElementById("description");
let humidity=document.getElementById("humidity");
let windSpeed= document.getElementById("wind-speed");

const btn=document.getElementById("btn");
const list=document.getElementById("list");

btn.addEventListener("click", async ()=>{
let location=document.getElementById("location").value;
   const result =await getWeather(location);
   list.classList.add("after");
   locName.innerText=`Location :-${result.location.name}, ${result.location.region}, ${result.location.country}`
    temp.innerText=` Temperature:- ${result.current.temp_c}`;
    desc.innerText=` Description:- ${result.current.condition.text}`
    humidity.innerText=`Humidity:- ${result.current.humidity}`
    windSpeed.innerText=`Wind-Speed:- ${result.current.wind_kph} kph`;

})

async function getWeather(location) {
    const data=await fetch(`http://api.weatherapi.com/v1/current.json?key=442980b2449c4505ab192313241207&q=${location}&aqi=yes`);
    return data.json();
}

