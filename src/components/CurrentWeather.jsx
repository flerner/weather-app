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
      <div className='date-and-desc'>
        <div className='title'>{formattedDate}</div>
        <div>
          {desc.map((d) => (
            <p key={d.id}>{d.description}</p>
          ))}
        </div>
      </div>

      <h1>Current</h1>
    </div>
  )
}
export default CurrentWeather
