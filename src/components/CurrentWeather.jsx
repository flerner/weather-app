import "./CurrentWeather.css"
import Data from "../Mockup/example.json"
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";


function CurrentWeather() {
  console.log(Data.dt)
  const date = new Date(Data.dt * 1000)
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  const formattedDate = date.toLocaleDateString("en-US", options)
  const temp = Math.floor(Data.main.temp)
  const desc = Data.weather
  const location = Data.name
  const windSpeed = Data.wind.speed
  const humidity = Data.main.humidity
  console.log(desc)
  console.log(formattedDate)
  return (
    <div className='current-weather'>
      <div className='title'>
        {formattedDate}
      </div>
      <div className='icon'>
        <img
          src={`https://openweathermap.org/img/wn/${desc[0].icon}.png`}
        ></img>
      </div>
      <div className='temp'>
        <h2>{temp}°C</h2>
      </div>
      <div className="location"><p>{location}</p></div>
      <div className="humidity-speed">
        <div className="humidity-container">
          <div className="humidity">
            <WiHumidity />
            <p>{humidity}%</p>
          </div>
        </div>
        <div className="speed-container">
          <div className="speed">
            <FiWind />
            <p>{windSpeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CurrentWeather
