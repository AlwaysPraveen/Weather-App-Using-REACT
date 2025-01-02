import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox ({info}) { // getting this info from WeatherApp.jsx
    
    
let HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=1024x1024&w=is&k=20&c=5hofX5ZVagxBLLoWcKePmk7EJqWg39J_egG5JsVIj_E=";
let COLD_URL = "https://images.unsplash.com/photo-1542267207-f8127b454605?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=1024x1024&w=is&k=20&c=NyB7w-uFLH5DvfzVARNmAx9lofieWs5m4f7_pEm_ly0=";


    return (
        <div className="InfoBox">
            
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity >80 ? RAIN_URL : info.temp > 18 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity >80 ? <ThunderstormIcon/> : info.temp > 18 ? <WbSunnyIcon/> :<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature - {info.temp}&deg;C</p>
                            <p>Humidity - {info.humidity}</p>
                            <p>Min Temp - {info.tempMin}&deg;C</p>
                            <p>Max Temp - {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <b>{info.weather} </b> and feels like <b>{info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}