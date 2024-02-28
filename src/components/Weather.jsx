import { useState } from 'react'
import CurrentWeather from './CurrentWeather'
import SearchBar from './SearchBar'
import './Weather.css'
function Weather() {
  const [coords, setCoords] = useState(null)
  const handleOnSearchChange = (searchData) => {
    setCoords(searchData)
  }
  return (
    <div className='container'>
      <div className="search-bar">
        <SearchBar onSearchChange={handleOnSearchChange} />
      </div>
      {coords ? <CurrentWeather coords={coords} /> : <CurrentWeather />}
    </div>
  )
}
export default Weather