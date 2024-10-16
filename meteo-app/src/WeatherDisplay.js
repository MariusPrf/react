import React from "react";

const WeatherDisplay = ({ data }) => {
    return (
        <div>
            <h1>Météo actuelle</h1>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather Icon"/>
            <p>Ville : {data.name}</p>
            <p>Température : {data.main.temp} °C</p>
            <p>Déscription : {data.weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;
