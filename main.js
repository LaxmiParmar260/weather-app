let form = document.querySelector("form");
let input = document.querySelector("input");
let button = document.querySelector(".btn");
let card = document.querySelector("#wetherCard");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let image = document.querySelector("img");
let container = document.querySelector(".container")
let forecast = document.querySelector(".Forecast")

let fetchWeather = async (e) => {
  e.preventDefault();
  try {
    const response =
    await fetch(`https://api.weatherapi.com/v1/forecast.json?key=908bd93107924ce6a1d55855243108&q=${input.value}&days=5&aqi=yes&alerts=no
`);
  const data = await response.json();
  console.log(data);
  wetherCard.className = "card p-3 mt-2 shadow-lg "
  h2.innerText = `${data.current.temp_c}C`;
  h3.innerText = data.location.name;
  image.setAttribute( 'src', data.current.condition.icon);
  p.innerText = data.current.condition.text;
  



   
  // let value =   data.forecast.forecastday[0].day.maxtemp_c
  // console.log(value);


  // if(h2.innerText<=26){
  //  container.style.backgroundImage = "url(95bd334eb5286ee5bebec0401dd3c9bf.gif)";
  // }else{
  //  container.style.backgroundColor = "yellow"
  // }
      
 } catch (error) {
    window.alert("Invalid City name")
    wetherCard.className = "card p-3 mt-2 shadow-lg d-none"   
 }

 

//for empty input
 form.reset()     
};

form.addEventListener("submit", fetchWeather);


// script.js

