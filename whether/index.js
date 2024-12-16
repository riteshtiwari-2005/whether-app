let search = document.getElementById("city-input-btn");
let temp = document.getElementById("temperature");
let desc = document.getElementById("description");
let windspeed = document.getElementById("wind-speed");
let icon = document.getElementById("weather-icon");
let weth = document.getElementById("weather-info");
let coun = document.getElementById("country");
let state = document.getElementById("state");
search.addEventListener("click", () => {
  let input_value = document.getElementById("city-input");
  let url = `https://api.weatherapi.com/v1/current.json?key=2f978445daba4edbbb253638241412&q=${input_value.value}`;
  fetch(url)
    .then((res) => {
      // Convert the response to JSON
      return res.json();
    })
    .then((data) => {
      weth.style.display = "block";
      console.log(data);
      icon.src = data.current.condition.icon;
      temp.innerHTML = data.current.temp_c;
      desc.innerHTML = data.current.temp_f;
      windspeed.innerHTML = data.current.condition.text;
      coun.innerHTML = data.location.country;
      state.innerHTML = data.location.region;
    });
});
