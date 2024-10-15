import React, { useState, useEffect } from "react";
import axios from "axios";

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
        const response = await axios.get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_KEY}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Erreur lors du chargement des données météo.");
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
        <h1>Météo actuelle</h1>
        {weatherData && (
            <div>
              <p>Température : {weatherData.current.temp} °C</p>
              <p>Humidité : {weatherData.current.humidity} %</p>
              {/* Affichez plus de données en fonction de l'API */}
            </div>
        )}
      </div>
  );
};

export default Weather;

