import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import HotTubIcon from '@mui/icons-material/HotTub';
import './InfoBox.css';

export default function InfoBox({info}) {

    const INIT_URL = "https://plus.unsplash.com/premium_photo-1666211586138-d40960820390?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhemV8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";


    return (
        <div className="InfoBox">
            {/* <h2>Weather Info - {info.desc}</h2> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image = {info.humidity > 80 ? RAIN_URL : info.temp < 20 ? COLD_URL : HOT_URL}
                        title="green iguana"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;
                            {
                                info.humidity > 80 ? <ThunderstormIcon /> : info.temp < 20 ? <SevereColdIcon /> : <HotTubIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature = {info.temp}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Humidity = {info.humidity}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Wind Speed = {info.windSpeed}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Feels Like = {info.feelslike}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Is Day = {info.is_day}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}