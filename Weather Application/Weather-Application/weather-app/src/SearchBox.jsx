import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "http://api.weatherstack.com/current";

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?access_key=${API_KEY}&query=${city}`);
            let data = await response.json();
            let result = {
                city : data.location.name,
                temp : data.current.temperature,
                desc : data.current.weather_descriptions[0],
                humidity : data.current.humidity,
                windSpeed : data.current.wind_speed,
                feelslike : data.current.feelslike,
                is_day : data.current.is_day
            }
            console.log(result);
            return result;
        }catch(error){
            throw error;
        }
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    }
                                          
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log("Searching weather for:", city);
            // Add logic to fetch weather data for the entered city
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(error){
            // setError("Failed to fetch weather data. Please try again.");
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Enter City Name" variant="filled" required value={city} onChange={handleChange} />
                <br /> <br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}


