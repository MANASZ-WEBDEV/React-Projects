import SearchBox from "./SearchBox";    
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
        city: "Delhi",
        temp: "25°C",
        humidity: "60%",
        windSpeed: "15 km/h",
        desc: "Haze",
        feelslike: "27°C",
        is_day: "yes",
    });

    let updateInfo = (newInfo) =>{
        setWeatherData(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather Application</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherData}/>
        </div>

    )
}