// src/WeatherDisplay.js
import React from "react";

const WeatherDisplay = ({ data }) => {
    return (
        <div>
            <h1>Prévisions météo sur 5 jours (toutes les 3 heures)</h1>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Température (°C)</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {data.map((forecast, index) => {
                    const dateTime = new Date(forecast.dt * 1000);  // Convertir l'horodatage Unix en date
                    const date = dateTime.toLocaleDateString();
                    const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                    return (
                        <tr key={index}>
                            <td>{date}</td>
                            <td>{time}</td>
                            <td>{forecast.main.temp} °C</td>
                            <td>{forecast.weather[0].description}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default WeatherDisplay;
