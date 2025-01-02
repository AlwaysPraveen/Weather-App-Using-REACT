import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'


export default function WeatherApp () {
    const [weatherinfo,setWeatherInfo] = useState({
        city: "Hyderabad",
        feelsLike:25.7,
        temp: 25.8,
        tempMin:24.5,
        tempMax:26.4,
        humidity:78,
        weather: "Rainy"
    })
    let updateInfo = (updateInfo) => {
        setWeatherInfo(updateInfo)
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Praveen Kumar</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info = {weatherinfo}/>
        </div>
    )
}