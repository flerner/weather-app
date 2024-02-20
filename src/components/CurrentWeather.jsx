import "./CurrentWeather.css"
import Data from "../Mockup/example.json"
function CurrentWeather() {
  console.log(Data.current.dt)
  const date = new Date(Data.current.dt * 1000)
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  const formattedDate = date.toLocaleDateString("en-US", options)

  const desc = Data.current.weather
  console.log(desc)
  console.log(formattedDate)
  return (
    <div className='current-weather'>
      <div className='date'>
        <div className='title'>{formattedDate}</div>
      </div>
      <div className='temp-and-desc'>
        <div className='desc'>
          <p>{desc[0].description}</p>
        </div>

        <div className='icon'>
          <img
            src={`https://openweathermap.org/img/wn/${desc[0].icon}.png`}
          ></img>
        </div>
      </div>

      <h1>Current</h1>
    </div>
  )
}
export default CurrentWeather
