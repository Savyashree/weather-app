import styled from "styled-components";
import React, { useState } from 'react';
import CityComponent from "./Components/CityComponent";
import WeatherComponent from "./Components/WeatherComponent";
import axios, { Axios } from "axios";

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding : 20px 10px;
border-radius: 4px;
width:500px;
background: white;
font-family: Montserrat;
`;


const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const fetchWeather = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&type=hour&units=metric&appid=23dc3a7fe36f9f7bfc2398855585545b`)
    setWeather(response.data)
  }
  return (
    <Container>
      <AppLabel>React wether app</AppLabel>
      <CityComponent updateCity={setCity} fetchWeather={fetchWeather} />
      {weather ? <WeatherComponent weather={weather} /> : null}
    </Container>
  );
}

export default App;
