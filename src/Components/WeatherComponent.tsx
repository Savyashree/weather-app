import { time } from "console";
import React from "react"
import styled from "styled-components";


export const WeatherInfoIcons: any = {
    temperature: { src: "./icons/temp.svg", name: "High / Low" },
    sunset: { src: "./icons/temp.svg", name: "Sunset" },
    sunrise: { src: "./icons/temp.svg", name: "sunrise" },
    humidity: { src: "./icons/humidity.svg", name: "humidity" },
    wind: { src: "./icons/wind.svg", name: "wind" },
    wind_direction: { src: "./icons/wind.svg", name: "wind direction" },
    pressure: { src: "./icons/pressure.svg", name: "pressure" },
    visibility: { src: "./icons/temp.svg", name: "visibility" },
};

export const WeatherIcons: any = {
    "01d": "./icons/sunny.svg",
    "01n": "./icons/night.svg",
    "02d": "./icons/day.svg",
    "02n": "./icons/cloudy-night.svg",
    "03d": "./icons/cloudy.svg",
    "03n": "./icons/cloudy.svg",
    "04d": "./icons/perfect-day.svg",
    "04n": "./icons/cloudy-night.svg",
    "09d": "./icons/rain.svg",
    "09n": "./icons/rain-night.svg",
    "010d": "./icons/rain.svg",
    "010n": "./icons/rain-night.svg",
    "011d": "./icons/strom.svg",
    "011n": "./icons/strom.svg",

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


const WeatherComponent = (props: any) => {
    const { weather } = props;
    console.log(weather)

    const getTimeIn12hrs = (timeIn24hr: string) => {
        const options: any = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' };
        const time12h = new Date('1970-01-01T' + timeIn24hr + '+05:30').toLocaleTimeString('en-US', options);
        return time12h;
    }

    return (
        <>
            <WeatherCondition>
                <Condition><span>{`${Math.floor(weather.main.temp)} ${'\u00b0'} C `}</span>{`${weather.weather[0].description}`} |</Condition>
                <WeatherLogo src={WeatherIcons[weather.weather[0].icon]} />
            </WeatherCondition>
            <Location>{`${weather.name} , ${weather.sys.country}`}</Location>
            <WeatherInfoLabel>Weather info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name="temperature" value={`${weather.main.temp_max} / ${weather.main.temp_min}`} />
                <WeatherInfoComponent name="wind" value={`${weather.wind.speed} km/hr`} />
                <WeatherInfoComponent name="humidity" value={`${weather.main.humidity} %`} />
                <WeatherInfoComponent name="wind_direction" value={`${weather.wind.deg} ${'\u00b0'} deg`} />
                <WeatherInfoComponent name="pressure" value={`${weather.main.pressure} hPa`} />
                <WeatherInfoComponent name="sunrise" value={getTimeIn12hrs(new Date((weather.timezone + weather.sys.sunrise) * 1000).toUTCString().slice(-12, -4))} />
                <WeatherInfoComponent name="visibility" value={`${weather.visibility / 1000} Km`} />
                <WeatherInfoComponent name="sunset" value={getTimeIn12hrs(new Date((weather.timezone + weather.sys.sunset) * 1000).toUTCString().slice(-12, -4))} />
            </WeatherInfoContainer>
        </>
    )
}

export default WeatherComponent;