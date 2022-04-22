// Open Weather Map Api is the one im using in this case.
// Making variables for all the data that will be used

var button = document.getElementsByName('submitButton')
var cityName = document.getElementsByName('cityName')
var name = document.getElementsByName('name')
var description = document.getElementsByName('description')
var temp = document.getElementsByName('temp')

//Fetching the data from the API when button in pressed
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=af43bd815e68db54398e2371491d4013')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("Wrong City Name!"))
})