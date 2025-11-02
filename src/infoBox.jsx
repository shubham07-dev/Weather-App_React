import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css"
export default function InfoBox({info}) {
    let Hot_URL="https://www.northlincs.gov.uk/wp-content/uploads/2019/07/Sunshine-for-web.jpg"
    let Cold_URL="https://www.elft.nhs.uk/sites/default/files/styles/news_page/public/2022-12/frost.jpg?itok=JhT10SE-"
    let Rainy_URL="https://www.shutterstock.com/image-photo/raining-dark-cloudy-storm-cloud-260nw-2247961477.jpg"
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <div className="card">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity>80 ? Rainy_URL: info.temp<24?Cold_URL:Hot_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp<24 ? <AcUnitIcon/> : <SunnyIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                       <p> Temperature = {info.temp}&deg;C</p>
                       <p>Humidity = {info.humidity}</p>
                       <p>Min Temp = {info.tempMin}&deg;C</p>
                       <p>Max Temp = {info.tempMax}&deg;C</p>
                       <p>The Weather can be Describe as <b>{info.weather}</b>  and Temperature Feels Like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}