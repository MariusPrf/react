import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [cityInfo, setCityInfo] = useState(""); // Pour stocker les informations sur la ville
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [city, setCity] = useState("");

    const API_KEY = "d8f8af9077af33160c359b1076d3d3fa";

    const fetchWeatherData = async (lat, lon) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=fr&units=metric`
            );

            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données");
            }

            const data = await response.json();
            setWeatherData(data.list);
            setCityInfo(data.city.name); // Stocker le nom de la ville
            setLoading(false);
        } catch (err) {
            setError("Impossible de récupérer les données météo.");
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!location.lat || !location.lon) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (err) => {
                    setError("Impossible de récupérer votre localisation.");
                    setLoading(false);
                }
            );
        } else {
            fetchWeatherData(location.lat, location.lon);
        }
    }, [location, API_KEY]);

    const fetchWeatherByCity = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=fr&units=metric`
            );
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données");
            }
            const data = await response.json();
            setWeatherData(data.list);
            setCityInfo(data.city.name); // Stocker le nom de la ville
            setLoading(false);
        } catch (err) {
            setError("Impossible de récupérer les données météo pour cette ville.");
            setLoading(false);
        }
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleCitySubmit = (e) => {
        e.preventDefault();
        fetchWeatherByCity();
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <form onSubmit={handleCitySubmit} style={styles.form}>
                <input
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    placeholder="Entrez une ville"
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Rechercher</button>
            </form>
            {weatherData && <WeatherDisplay data={weatherData} city={cityInfo} />} {/* Passer la ville */}
        </div>
    );
};

const styles = {
    form: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginRight: "10px",
        width: "250px",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }
};

export default Weather;
