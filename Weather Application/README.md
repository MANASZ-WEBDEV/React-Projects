# ⛅ Weather Application

A modern, responsive weather application built with **React** and **Material-UI** that provides real-time weather information for any city worldwide. Get instant access to current temperature, humidity, wind speed, and more with a beautiful, intuitive user interface.

---

## 🎯 Features

- 🔍 **Real-time Weather Search** - Search for weather information by city name
- 🌡️ **Detailed Weather Information** - View temperature, feels-like temperature, humidity, and wind speed
- 🎨 **Beautiful UI** - Modern, responsive design using Material-UI components
- 📱 **Mobile Responsive** - Fully optimized for desktop and mobile devices
- 🌤️ **Weather Descriptions** - Displays detailed weather conditions (sunny, rainy, cloudy, etc.)
- 🌅 **Day/Night Indicator** - Shows whether it's day or night in the searched location
- ⚡ **Fast & Efficient** - Built with Vite for optimal performance
- 🔄 **Live Updates** - Get real-time weather data from the WeatherStack API

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19.1.0** | Frontend framework for building interactive UI |
| **Material-UI (MUI) 7.3.6** | Comprehensive React component library |
| **Vite 6.3.5** | Next-generation build tool for fast development |
| **Emotion** | CSS-in-JS library for styling |
| **Roboto Font** | Professional typography |
| **Material Icons** | Beautiful icon set |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0 or higher) - Usually comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

To verify installations, run:
```bash
node --version
npm --version
git --version
```

---

## 🚀 Quick Start Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/weather-application.git
cd weather-application
```

### Step 2: Navigate to the Project Directory

```bash
cd Weather-Application/weather-app
```

### Step 3: Install Dependencies

Install all required packages using npm:

```bash
npm install
```

This will install all the dependencies listed in `package.json`.

### Step 4: Start the Development Server

Run the application in development mode:

```bash
npm run dev
```

The application will open in your default browser at `http://localhost:5173/`

---

## 📖 Usage

1. **Enter a City Name** - Type the name of any city in the search box
2. **Click Search** - Press the search button or hit Enter
3. **View Weather Information** - The current weather details will be displayed
4. **Search Again** - Try another city whenever you want

### Example Cities to Try
- London
- New York
- Tokyo
- Paris
- Sydney
- Dubai
- Mumbai

---

## 🏗️ Project Structure

```
weather-app/
├── public/                 # Static assets
├── src/
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   ├── WeatherApp.jsx     # Main weather component with state management
│   ├── SearchBox.jsx      # Search input component
│   ├── SearchBox.css      # Search box styles
│   ├── InfoBox.jsx        # Weather information display component
│   ├── InfoBox.css        # Info box styles
│   ├── main.jsx           # React entry point
│   ├── index.css          # Global styles
│   └── assets/            # Images and other media
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

---

## 📦 Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Run ESLint for code quality checks
npm run lint

# Preview production build locally
npm preview
```

---

## 🔑 API Configuration

This application uses the **WeatherStack API** for fetching weather data.

### To use your own API key:

1. Sign up for a free account at [WeatherStack](https://weatherstack.com/)
2. Get your API key
3. Update the API endpoint in `SearchBox.jsx`:

```javascript
const apiUrl = `http://api.weatherstack.com/current?access_key=YOUR_API_KEY&query=${city}`;
```

---

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🎨 Customization

### Change Theme Colors

Edit the Material-UI theme in your component files to customize colors, fonts, and spacing.

### Modify Weather Details

Update `InfoBox.jsx` to display additional weather parameters or modify the layout.

### Add More Features

- Add forecast functionality
- Implement location detection using Geolocation API
- Add weather alerts
- Create favorites/bookmark cities

---

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Port 5173 already in use
**Solution:** Run `npm run dev -- --port 3000` to use a different port

### Issue: API returns error
**Solution:** 
- Check your internet connection
- Verify the WeatherStack API key is correct
- Ensure the city name is valid

### Issue: Styles not loading
**Solution:** Clear browser cache (Ctrl+Shift+Delete) and restart the dev server

---

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [WeatherStack API Docs](https://weatherstack.com/documentation)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## 📄 Component Documentation

### WeatherApp.jsx
Main component that manages the application state and handles weather data.
- **State:** Stores current weather information
- **Props:** None
- **Key Functions:** `updateInfo()` - Updates weather data

### SearchBox.jsx
Handles user input and API calls.
- **Props:** `updateInfo` (function)
- **Key Functions:** `getWeatherInfo()` - Fetches weather from API

### InfoBox.jsx
Displays weather information in a card layout.
- **Props:** `info` (weather data object)
- **Displays:** Temperature, humidity, wind speed, weather conditions

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

Created by [Your Name]

---

## 🙏 Acknowledgments

- **Material-UI Team** for the amazing component library
- **WeatherStack** for providing weather data API
- **Vite Team** for the super-fast build tool
- All contributors and users who have helped improve this project

---

## 📞 Support

Have questions or need help? 

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/weather-application/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/weather-application/discussions)

---

## 🎓 What You'll Learn

By exploring this project, you'll learn:

✅ React hooks and state management  
✅ Component composition and reusability  
✅ Material-UI integration and customization  
✅ API integration with React  
✅ Responsive design principles  
✅ CSS styling and Emotion library  
✅ Vite build tool workflow  

---

**Happy Coding! ☀️** If you find this project helpful, please consider giving it a ⭐ on GitHub!
