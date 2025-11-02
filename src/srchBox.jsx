import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SrchBox.css"
import { useState } from 'react';
export default function SrchBox({updateInfo}) {
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="1d329aa160d24fc4dd615fd1e148fa7e"

    let [city,setcity]=useState("");
    let [error,seterror]=useState(false)

    let getWeatherInfo= async ()=>{
        try{
 let response=await fetch( `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jasonRes=await response.json()
        console.log(jasonRes)

        let result={
            city:jasonRes.name,
            temp:jasonRes.main.temp,
            tempMin:jasonRes.main.temp_min,
            tempMax:jasonRes.main.temp_max,
            humidity:jasonRes.main.humidity,
            feelsLike:jasonRes.main.feels_like,
            weather:jasonRes.weather[0].description,
        };
        console.log(result)
        setcity("")
        return result;
        }
        catch(err){
            throw err;
        }
       
    }

    let handleChange=(evt)=>{
        setcity(evt.target.value)
    }

    let handelSubmit=async (evt)=>{
        try{
   evt.preventDefault()
        console.log(city)
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo)
        }
        catch(err){
            seterror(true)
        }
     
    }
    return (
        <div className='SrchBox'>
            {/* <h2>Search For Weather</h2> */}
            <form onSubmit={handelSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br /><br />
                <Button variant="contained" type='submit' >Check Weather</Button>

            {error && <h2 style={{color:"red"}}>No Such Place Exist In Our API !! Pls Search For Another City</h2> }
            </form>

        </div>
    );
}