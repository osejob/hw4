// I struggled to put this together, and couldn't get the APIs to work unfortunately. I definitely underestimated
// this assignment and didn't leave myself with enough time. I was able to do the 3-column newspaper layout and
// was also able to get the ads to work. I feel like some of the javascript code below was on the right track but
// clear not where it needed to be.

// Would really appreciate some feedback and hopefully a passing grade :)



let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  // YOUR CODE GOES HERE
  let temp = $("#headline1 h1")
  temp.html("It is " + Math.round(data.main.temp) + " degrees outside in" + city.html(data.name))


}



let getWeather = function(info) {

let latitude = '48.8566';
  // let longitude = '2.3522';
  let apiKey = 'fad13ca22af87754cadeaf2ec94e01e9'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let handlePosition = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
}

let link = jQuery("#get_forecast")
link.on("click", handlePosition);


let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }


$(function() {
  let apiKey = "345dfe2f5da045bda930f9b4390714f2";
  let url = "https://api.nytimes.com/json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $("#headline2").empty();
    for (let i=0; data.results.length;) {
      let news = data.results[i];
      let html = '<div class="col-4">';
            $(".row").append(html);
    }
    $(".row").fadeIn(2000);
  });
});
