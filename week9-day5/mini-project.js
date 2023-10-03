const cards = document.getElementById('cards');
const weatherArray = [];
 function onSubmit(e){
    e.preventDefault();
    

    const form = document.forms[0];
    let input = form.elements[0];
    //console.log(input);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status !== 200){alert('Please enter a correct city name')};
        info = (JSON.parse(xhr.response));
        console.log(info)
        weatherArray.push(info);
        let celcius = Math.round(info.main.temp - 273.15)
        const newCard = document.createElement("div");
        newCard.style = 'background-color:white';
        const icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
        console.log(icon);
        newCard.className = 'card';
        newCard.innerHTML = `
        <h3>${info.name}</h3><br>
        <h1>${celcius}°C</h1><br>
        <h5>${info.weather[0].description}</h5>
        `;
        newCard.appendChild(icon);
        newCard.insertAdjacentHTML('beforeend', `
        <br/>wind speed: ${info.wind.speed} m/s<br/>
        sunrise: ${info.sys.sunrise}<br/>
        sunset: ${info.sys.sunset}
        `)
        cards.appendChild(newCard);
        input.value = "";
    }
    
    

}

function toFarenheit(e){
    e.preventDefault();
    console.log(weatherArray);
    
    weatherArray.forEach(item => {
        
        let fahrenheit = Math.round((item.main.temp - 273.15)*9/5+32)
        const newCard = document.createElement("div");
        newCard.style = 'background-color:white';
        const icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        console.log(icon);
        newCard.className = 'card';
        newCard.innerHTML = `
        <h3>${item.name}</h3><br>
        <h1>${fahrenheit}°F</h1><br>
        <h5>${item.weather[0].description}</h5>
        `;
        newCard.appendChild(icon);
        newCard.insertAdjacentHTML('beforeend', `
        <br/>wind speed: ${item.wind.speed} m/s<br/>
        sunrise: ${item.sys.sunrise}<br/>
        sunset: ${item.sys.sunset}
        `)
        cards.appendChild(newCard);
    })
    }
   

