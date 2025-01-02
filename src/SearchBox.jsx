import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { jsx } from '@emotion/react';

export default function SearchBox ({updateInfo}) {
    let [city,setCity] = useState("")
    let [error,setError] = useState(false) //using this only for errors
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d15ee32ed922b8faac50731d7bde317a"

    let getWeatherInfo = async () => {
        try {
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); //this is basic rule of calling weathermap.org api (see openweathermap.org -> built in geocoder -> Search by city)
        let jsonResponse = await response.json();                       //&units = metric is used to convert the data to celcius
        console.log(jsonResponse) //we get data here
        let result = { // only nedded things are added to this object
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value)
    }
    let handleSubmit = async (event) => {
       try {
        event.preventDefault();
        console.log(city);
        setCity("")
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo); // here we are passing this newInfo to updateInfo which is from WeatherApp.jsx
       }catch(err) {
        setError (true)
       }
    }
    return (
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange}/>
            <br></br> <br></br>
            <Button variant="contained" type = "submit" >Search</Button>
            {error ? <h3 style = {{color:"red"}}>There is no Such Place in Our Api</h3> : ""}
            </form>
        </div>
    )
}