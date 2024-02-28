import "./CurrentWeather.css"
import Data from "../Mockup/example.json"
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { useEffect, useState } from "react";
import { BASE_URL_OPENWEATHER, API_KEY } from "../apis/OpenweatherApi.js"

function CurrentWeather({ coords }) { // lat and lon from buenos aires by default
  const [weatherInfo, setWeatherinfo] = useState(null)
  useEffect(() => {
    if (coords) {
      fetch(`${BASE_URL_OPENWEATHER}lat=${coords.value.lat}&lon=${coords.value.lon}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => setWeatherinfo(data))
    }
  }, [coords])
  useEffect(() => {
    console.log(coords)
  }, [coords])
  console.log(weatherInfo)
  // const getCurrentData = () => {
  //   return (
  //     {
  //       date: new Date(weatherInfo.dt * 1000),
  //       options: {
  //         weekday: "long",
  //         day: "numeric",
  //         month: "long",
  //         year: "numeric",
  //       },
  //       formattedDate: date.toLocaleDateString("en-US", options),
  //       desc: weatherInfo.weather,
  //       location: weatherInfo.name,
  //       windSpeed: weatherInfo.wind.speed,
  //       humidity: weatherInfo.main.humidity
  //     }
  //   )
  // }
  // const date = new Date(weatherInfo.dt * 1000)
  // const options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // }
  // const formattedDate = date.toLocaleDateString("en-US", options)
  // //const temp = Math.floor(weatherInfo.main.temp)
  // const desc = weatherInfo.weather
  // const location = weatherInfo.name
  // const windSpeed = weatherInfo.wind.speed
  // const humidity = weatherInfo.main.humidity
  return (weatherInfo &&

    <div className='current-weather'>
      { }
      <div className='icon'>
        {/* <img
          src={`https://openweathermap.org/img/wn/${desc[0].icon}.png`}
        ></img> */}
      </div>
      <div className='temp'>
        <h2>{Math.floor(weatherInfo.main.temp)}°C</h2>
      </div>
      <div className="location">
        <p>{weatherInfo.name}</p>
      </div>
      <div className="humidity-speed">
        <div className="humidity-container">
          <div className="humidity">
            <WiHumidity />
            <p>{weatherInfo.main.humidity}%</p>
          </div>
          <p>Humidity</p>
        </div>
        <div className="speed-container">
          <div className="speed">
            <FiWind />
            <p>{weatherInfo.wind.speed} km/h</p>
          </div>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  )
}
export default CurrentWeather
