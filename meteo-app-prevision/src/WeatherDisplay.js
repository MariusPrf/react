import React from "react";

const WeatherDisplay = ({ data, city }) => {
    return (
        <div style={styles.container}>
            <h1>Prévisions météo pour {city} sur 5 jours (toutes les 3 heures)</h1>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Température (°C)</th>
                    <th>Description</th>
                    <th>Icône</th>
                </tr>
                </thead>
                <tbody>
                {data.map((forecast, index) => {
                    const dateTime = new Date(forecast.dt * 1000);
                    const date = dateTime.toLocaleDateString();
                    const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                    return (
                        <tr key={index} style={styles.row}>
                            <td>{date}</td>
                            <td>{time}</td>
                            <td>{forecast.main.temp} °C</td>
                            <td>{forecast.weather[0].description}</td>
                            <td>
                                <img
                                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                    alt="Weather Icon"
                                    style={styles.icon}
                                />
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
    },
    table: {
        width: "100%",
        marginTop: "20px",
        borderCollapse: "collapse",
    },
    row: {
        borderBottom: "1px solid #ccc",
    },
    icon: {
        width: "50px",
        height: "50px",
    },
};

export default WeatherDisplay;
