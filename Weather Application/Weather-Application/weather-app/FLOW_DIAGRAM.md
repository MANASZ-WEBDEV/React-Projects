# Weather Application - Flow Diagram

## Project Structure
```
weather-app/
├── src/
│   ├── WeatherApp.jsx       (Main Component - State Management)
│   ├── SearchBox.jsx        (User Input Component)
│   ├── InfoBox.jsx          (Display Component)
│   ├── InfoBox.css
│   ├── SearchBox.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
```

## Component Data Flow

```
                    ┌─────────────────────────┐
                    │    WeatherApp.jsx       │
                    │  (Main Component)       │
                    │                         │
                    │  State:                 │
                    │  - weatherData {        │
                    │    city, temp,          │
                    │    humidity, etc.       │
                    │  }                      │
                    └────────┬────────────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
         Pass: updateInfo()    Pass: info prop
                    │                 │
                    ▼                 ▼
        ┌──────────────────┐  ┌──────────────────┐
        │ SearchBox.jsx    │  │  InfoBox.jsx     │
        │                  │  │                  │
        │ - Input field    │  │ - Display Card   │
        │ - Search button  │  │ - City name      │
        │ - API call       │  │ - Temperature    │
        │ - updateInfo()   │  │ - Humidity       │
        │   callback       │  │ - Wind Speed     │
        └────────┬─────────┘  │ - Feels Like     │
                 │            │ - Is Day         │
                 │            └──────────────────┘
                 │
        Calls API (WeatherStack)
                 │
                 ▼
    API Response returns:
    {
      location: { name },
      current: {
        temperature,
        weather_descriptions,
        humidity,
        wind_speed,
        feelslike,
        is_day
      }
    }
```

## Data Flow Sequence

```
1. USER enters city name in SearchBox
                ↓
2. SearchBox calls getWeatherInfo()
                ↓
3. Fetch from API: weatherstack.com
                ↓
4. API returns weather data
                ↓
5. SearchBox processes data and calls updateInfo()
                ↓
6. updateInfo() updates weatherData state in WeatherApp
                ↓
7. WeatherApp re-renders and passes updated info to InfoBox
                ↓
8. InfoBox displays the weather information
```

## Component Props & State

### WeatherApp.jsx
```
State:
  weatherData: {
    city: string
    temp: number
    humidity: number
    windSpeed: number
    feelslike: number
    is_day: string
  }

Functions:
  updateInfo(newInfo) - Updates weatherData state
```

### SearchBox.jsx
```
Props:
  updateInfo: function - Callback to parent

State:
  city: string - Input field value

Functions:
  getWeatherInfo() - Fetches weather from API
  handleChange() - Updates city state
  handleSubmit() - Handles form submission
```

### InfoBox.jsx
```
Props:
  info: {
    city
    temp
    humidity
    windSpeed
    feelslike
    is_day
  }

Display:
  - Material-UI Card
  - City name as heading
  - Weather details in Typography components
```

## API Integration

**API Used:** WeatherStack  
**Endpoint:** `http://api.weatherstack.com/current`  
**Parameters:** 
- access_key (API Key)
- query (City name)

**Response Structure:**
```json
{
  "location": {
    "name": "City Name"
  },
  "current": {
    "temperature": 25,
    "weather_descriptions": ["Haze"],
    "humidity": 60,
    "wind_speed": 15,
    "feelslike": 27,
    "is_day": "yes"
  }
}
```

## Styling

- **SearchBox.css** - Styles for search input and button
- **InfoBox.css** - Flexbox layout for centering the weather card
- **App.css** - Global styles

## Key Features

✅ Real-time weather API integration  
✅ Dynamic state management with React hooks  
✅ Material-UI components for UI  
✅ Responsive centered layout with flexbox  
✅ Props drilling for parent-child communication
