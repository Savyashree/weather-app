import React, { useState } from "react"
import styled from "styled-components";

const WeatherHeader = styled.div`
disaply: flex;
flex-direction: row;
`;

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin : 40px auto;
`

const ChooseCityLogo = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`


const SearchBox = styled.form`
disaply: flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
color:black;
font-size: 18px;
font-weight: bold;
margin : 20px auto;
& input{
    padding: 10px;
    font-size: 14px;
    boder: none;
    outline: none;
    font-weight: bold;
}
& button{
    padding: 10px;
    font-size: 14px;
    boder: none;
    outline: none;
    color:white;
    background-color:black;
    cursor:pointer;
}
`;

const CityComponent = (props: { updateCity: any; fetchWeather: any; }) => {
    const { updateCity, fetchWeather } = props;
    return (
        <>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="city" onChange={(e) => updateCity(e.target.value)} />
                <button type="submit">Submit</button>
            </SearchBox>
        </>
    )
}

export default CityComponent;