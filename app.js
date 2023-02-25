let output = document.getElementById("output");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  let key ="vay";
  //If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  //If input field is NOT empty
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}`;
    //Clear the input field
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
        result.innerHTML = `
        <h4>${data.name}</h24>
        <h5 class="weather">${data.weather[0].main}</h5>
        <h5 class="desc">${data.weather[0].description}</h5>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h3>${data.main.temp} &#176;</h3>
        <div class="temp-container">
            <div>
                <h5 class="title">Humidity</h5>
                <h5 class="humidity">${data.main.humidity}%;</h5>
            </div>
            <div>
                <h4 class="title">Wind Speed</h4>
                 <h4 class="temp">${data.wind.speed}km/hr;</h4>
            </div>
        </div>
        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);