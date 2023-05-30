import React, { useEffect, useState } from 'react'
import hot from "../../assests/hot.jpg"
import cold from "../../assests/cold.jpg"
import monsoon from "../../assests/monsoon.jpg"
import './weather.css'
import Details from '../Description/Details'
import { weatherData } from '../../WeatherServices'

export default function Weather() {
    const [city, setCity] = useState('Paris')
    const [weather, setWeather] = useState(null)
    const [units, setUnits] = useState("metric")
    const [bg, setBg] = useState(hot)
    useEffect(() => {
        const fetchData = async () => {
            const data = await weatherData(city, units)
            setWeather(data)
            const threshold = units === 'metric' ? 20 : 60;
            if(data.temp <= threshold) setBg(cold)
            else setBg(hot)
        }
        fetchData()

    }, [units, city])
    const handleUnits = (e) => {
        const button = e.currentTarget;
        const currentUnit = button.innerText;
        const isCelsius = currentUnit === 'C';
        button.innerText = isCelsius ? 'F' : 'C';
        setUnits(isCelsius ? 'metric' : 'imperial')

    };
    const enterKeyPressed = (e) => {
        if (e.keyCode === 13 ) {
            setCity(e.currentTarget.value)
            e.currentTarget.blur()
        }
    }

    return (
        <>
            <div className="weatherapp" style={{ backgroundImage: `url(${bg})` }}>
                <div className="overlay">
                    {weather && (
                        <div className="container">
                            <div className="section inputs">
                                <input onKeyDown={enterKeyPressed} type="text" name='city' placeholder='Enter the city name...' />
                                <button onClick={(e) => handleUnits(e)}>F</button>
                            </div>

                            <div className='section tempratureDetail'>
                                <div className="tempratureLeft">
                                    <h3>{`${weather.name}, ${weather.country}`}</h3>
                                    <img src={weather.iconURL} alt="weatherIcon" />
                                    <h3>{weather.description}</h3>
                                </div>
                                <div className="tempreatureRight">
                                    <h1>{`${weather.temp.toFixed()} ${units === 'metric' ? 'C' : 'F'}`}</h1>
                                </div>
                            </div>

                            <Details weather={weather} units={units} />

                        </div>
                    )
                    }

                </div>
            </div>

        </>
    )
}
