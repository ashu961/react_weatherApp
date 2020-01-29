import React, { useEffect, useState } from "react";
import Axios from "axios";

const Dashboard = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [city, setCity] = useState("Bhubaneswar");
  const [description, setDescription] = useState("");
  const fetchWeather = () => {
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?appid=61bcb59dbe2cb80788e9e5fef50000b4&q=${city},in`
    )
      .then(response => {
        const { weather, main } = response.data;
        setMin(main.temp_min - 273);
        setMax(main.temp_max - 273);
        setDescription(weather[0].description);
        console.log(weather);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchWeather();
  });

  return (
    <div style={{ margin: "300px", border: "3px solid black", padding: "10px" }}>
      <h1>city: {city}</h1>
      <h1>minimum temp: {min}</h1>
      <h1>maximum temp: {max}</h1>
      <h1>Description: {description}</h1>
      <label>
        Change City:
        <input
          value={city}
          onChange={event => setCity(event.target.value)}
          name="city"
          type="text"
        />
      </label>
      <br />
    </div>
  );
};

export default Dashboard;

// api.openweathermap.org/data/2.5/weather?q={city name}
// api.openweathermap.org/data/2.5/forecast?id=524901&APPID=61bcb59dbe2cb80788e9e5fef50000b4
