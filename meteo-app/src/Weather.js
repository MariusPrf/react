import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = "d8f8af9077af33160c359b1076d3d3fa";  
    const lat = "45.750000";
    const lon = "4.850000";

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
                );

                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }

                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (err) {
                setError("Impossible de récupérer les données météo.");
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [lat, lon, API_KEY]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {weatherData && <WeatherDisplay data={weatherData} />}
        </div>
    );
};

export default Weather;
