import React from "react";

const WeatherDisplay = ({ data }) => {
    return (
        <div>
            <h1>Météo actuelle</h1>
            <p>Température : {data.main.temp} °C</p>
        </div>
    );
};

export default WeatherDisplay;
