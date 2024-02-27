import { useState } from 'react'
import CurrentWeather from './CurrentWeather'
import SearchBar from './SearchBar'
import './Weather.css'
function Weather() {
  const [coords, setCoords] = useState({})
  const handleOnSearchChange = (searchData) => {
    setCoords(searchData)
  }
  return (
    <div className='container'>
      <div className="search-bar">
        <SearchBar onSearchChange={handleOnSearchChange} />
      </div>
      <CurrentWeather coords={coords} />
    </div>
  )
}
export default Weather