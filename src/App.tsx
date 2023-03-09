import styled from "styled-components";
import React from 'react';
import CityComponent from "./Components/CityComponent";
import WeatherInfoComponent from "./Components/WeatherInfoComponent";

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
  return (
    <Container>
      <AppLabel>React wether app</AppLabel>
      <WeatherInfoComponent />
    </Container>
  );
}

export default App;
