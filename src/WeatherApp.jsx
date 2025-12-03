import SrchBox from "./srchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
 const [weatherInfo,setWeatherInfo]=useState({})

 let updateInfo=(newinfo)=>{
    setWeatherInfo(newinfo);
 }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App by @YashDeep07</h1>
            <SrchBox updateInfo={updateInfo}></SrchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>

    )
}
