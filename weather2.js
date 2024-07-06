 async function checkWeatherDetails(cityName){
    let temp = document.getElementById("temp")
    let city = document.getElementById("city")

    let key = '5fbbc8690845dcf4c6a1237f612d2e54'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
    
    let data =  await fetch(apiUrl).then(response =>{
        if(!response.ok){
            console.log("Netwot is Busy....");
        }
        return response.json();
    });

    let tempToCelcius = data.main.temp
        console.log(data);
        
    temp.innerText = tempToCelcius.toFixed(2)+" °C"
    city.innerText = data.name
}