import React from "react"
import styled from "styled-components";


export const WeatherInfoIcons: any = {
    temperature: { src: "./icons/temp.svg", name: "High/Low" },
    sunset: { src: "./icons/temp.svg", name: "Sunset" },
    sunrise: { src: "./icons/temp.svg", name: "sunrise" },
    humidity: { src: "./icons/humidity.svg", name: "humidity" },
    wind: { src: "./icons/wind.svg", name: "wind" },
    wind_direction: { src: "./icons/wind.svg", name: "wind direction" },
    pressure: { src: "./icons/pressure.svg", name: "pressure" },
    visibility: { src: "./icons/temp.svg", name: "visibility" },
};


const WeatherCondition = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justify-content: space-between;
margin: 30px auto
`
const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin : 5px auto;
`

const Condition = styled.span`
margin: 20px auto;
font-size: 14px;
& span{
    font-size: 28px
}
`;


const Location = styled.span`
font-size: 28px;
font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    margin: 20px 25px 10px;
    text-align: start;
    width: 90%
`;
const WeatherInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
`

const InfoContainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    align-items: center;
`;

const InfoIcon = styled.img` 
    width: 36px;
    height: 36px;
`;
const InfoLabel = styled.span` 
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px;
    & span{
        font-size: 12px;
        text-transform: capitalize;
    }
`;


const WeatherInfoComponent = (props: { name: any; value: any; }) => {
    const { name, value } = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name].src} />
            <InfoLabel>{value}<span>{WeatherInfoIcons[name].name}</span></InfoLabel>
        </InfoContainer>

    )
}


const WeatherComponent = () => {
    return (
        <>
            <WeatherCondition>
                <Condition><span>30 C</span>Cloudy |</Condition>
                <WeatherLogo src="./icons/perfect-day.svg" />
            </WeatherCondition>
            <Location>London, GB</Location>
            <WeatherInfoLabel>Weather info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name="temperature" value="10" />
                <WeatherInfoComponent name="wind" value="10" />
                <WeatherInfoComponent name="humidity" value="10" />
                <WeatherInfoComponent name="wind_direction" value="10" />
                <WeatherInfoComponent name="pressure" value="10" />
                <WeatherInfoComponent name="sunrise" value="10" />
                <WeatherInfoComponent name="visibility" value="10" />
                <WeatherInfoComponent name="sunset" value="10" />
            </WeatherInfoContainer>
        </>
    )
}

export default WeatherComponent;